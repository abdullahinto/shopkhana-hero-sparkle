
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { WishlistItem, LocalWishlistItem, AddToWishlistParams } from '@/types/wishlist';

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  wishlistCount: number;
  loading: boolean;
  addToWishlist: (params: AddToWishlistParams) => Promise<void>;
  removeFromWishlist: (productId: string, productVariant: string | undefined) => Promise<void>;
  clearWishlist: () => Promise<void>;
  refreshWishlist: () => Promise<void>;
  isInWishlist: (productId: string, productVariant?: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const LOCAL_WISHLIST_KEY = 'shopkhana_wishlist';

  // Get local wishlist items
  const getLocalWishlist = (): LocalWishlistItem[] => {
    try {
      const localWishlist = localStorage.getItem(LOCAL_WISHLIST_KEY);
      return localWishlist ? JSON.parse(localWishlist) : [];
    } catch (error) {
      console.error('Error reading local wishlist:', error);
      return [];
    }
  };

  // Save to local wishlist
  const saveToLocalWishlist = (items: LocalWishlistItem[]) => {
    try {
      localStorage.setItem(LOCAL_WISHLIST_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving to local wishlist:', error);
    }
  };

  // Clear local wishlist
  const clearLocalWishlist = () => {
    localStorage.removeItem(LOCAL_WISHLIST_KEY);
  };

  // Fetch wishlist items from Supabase
  const fetchWishlistItems = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('wishlist')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching wishlist items:', error);
        toast({
          title: "Error loading wishlist",
          description: "Failed to load your wishlist items",
          variant: "destructive",
        });
        return;
      }

      setWishlistItems(data || []);
    } catch (error) {
      console.error('Error fetching wishlist items:', error);
    } finally {
      setLoading(false);
    }
  };

  // Merge local wishlist with Supabase on login
  const mergeLocalWishlistWithSupabase = async () => {
    const localWishlist = getLocalWishlist();
    if (localWishlist.length === 0) return;

    setLoading(true);
    try {
      for (const item of localWishlist) {
        await addToSupabaseWishlist(item);
      }
      clearLocalWishlist();
      await fetchWishlistItems();
      toast({
        title: "Wishlist synced",
        description: "Your wishlist items have been synced to your account",
      });
    } catch (error) {
      console.error('Error merging local wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add item to Supabase wishlist
  const addToSupabaseWishlist = async (params: AddToWishlistParams) => {
    if (!user) return;

    const { data: existingItem } = await supabase
      .from('wishlist')
      .select('*')
      .eq('product_id', params.product_id)
      .eq('product_variant', params.product_variant || null)
      .single();

    if (!existingItem) {
      // Insert new item only if it doesn't exist
      const { error } = await supabase
        .from('wishlist')
        .insert([{
          user_id: user.id,
          product_id: params.product_id,
          product_name: params.product_name,
          product_variant: params.product_variant || null,
          product_price: params.product_price,
          product_image: params.product_image || '/placeholder.svg',
        }]);

      if (error) throw error;
    }
  };

  // Add to wishlist (handles both local and Supabase)
  const addToWishlist = async (params: AddToWishlistParams) => {
    try {
      if (user) {
        await addToSupabaseWishlist(params);
        await fetchWishlistItems();
        toast({
          title: "Added to wishlist",
          description: `${params.product_name} has been added to your wishlist`,
        });
      } else {
        // Handle guest wishlist
        const localWishlist = getLocalWishlist();
        const existingItemIndex = localWishlist.findIndex(
          item => item.product_id === params.product_id && 
                   item.product_variant === params.product_variant
        );

        if (existingItemIndex === -1) {
          localWishlist.push({
            product_id: params.product_id,
            product_name: params.product_name,
            product_variant: params.product_variant,
            product_price: params.product_price,
            product_image: params.product_image || '/placeholder.svg',
          });

          saveToLocalWishlist(localWishlist);
          toast({
            title: "Added to wishlist",
            description: `${params.product_name} has been added to your wishlist`,
          });
        }
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      toast({
        title: "Error",
        description: "Failed to add item to wishlist",
        variant: "destructive",
      });
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = async (productId: string, productVariant: string | undefined) => {
    try {
      if (user) {
        const { error } = await supabase
          .from('wishlist')
          .delete()
          .eq('product_id', productId)
          .eq('product_variant', productVariant || null);

        if (error) throw error;
        await fetchWishlistItems();
        toast({
          title: "Removed from wishlist",
          description: "Item has been removed from your wishlist",
        });
      } else {
        const localWishlist = getLocalWishlist();
        const filteredWishlist = localWishlist.filter(
          item => !(item.product_id === productId && item.product_variant === productVariant)
        );
        saveToLocalWishlist(filteredWishlist);
        toast({
          title: "Removed from wishlist",
          description: "Item has been removed from your wishlist",
        });
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      toast({
        title: "Error",
        description: "Failed to remove item from wishlist",
        variant: "destructive",
      });
    }
  };

  // Clear entire wishlist
  const clearWishlist = async () => {
    try {
      if (user) {
        const { error } = await supabase
          .from('wishlist')
          .delete()
          .neq('id', '');

        if (error) throw error;
        setWishlistItems([]);
      } else {
        clearLocalWishlist();
      }
    } catch (error) {
      console.error('Error clearing wishlist:', error);
    }
  };

  // Refresh wishlist
  const refreshWishlist = async () => {
    if (user) {
      await fetchWishlistItems();
    }
  };

  // Check if item is in wishlist
  const isInWishlist = (productId: string, productVariant?: string) => {
    if (user) {
      return wishlistItems.some(
        item => item.product_id === productId && item.product_variant === (productVariant || null)
      );
    } else {
      const localWishlist = getLocalWishlist();
      return localWishlist.some(
        item => item.product_id === productId && item.product_variant === productVariant
      );
    }
  };

  // Calculate wishlist count
  const wishlistCount = user ? 
    wishlistItems.length :
    getLocalWishlist().length;

  // Effects
  useEffect(() => {
    if (user) {
      fetchWishlistItems();
      
      // Merge local wishlist if exists
      const localWishlist = getLocalWishlist();
      if (localWishlist.length > 0) {
        mergeLocalWishlistWithSupabase();
      }
    } else {
      setWishlistItems([]);
    }
  }, [user]);

  const value = {
    wishlistItems,
    wishlistCount,
    loading,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    refreshWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
