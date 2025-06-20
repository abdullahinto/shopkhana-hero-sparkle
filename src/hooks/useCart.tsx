
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { CartItem, LocalCartItem, AddToCartParams } from '@/types/cart';

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  loading: boolean;
  addToCart: (params: AddToCartParams) => Promise<void>;
  updateCartItem: (productId: string, productVariant: string | undefined, quantity: number) => Promise<void>;
  removeFromCart: (productId: string, productVariant: string | undefined) => Promise<void>;
  clearCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const LOCAL_CART_KEY = 'shopkhana_cart';

  // Get local cart items
  const getLocalCart = (): LocalCartItem[] => {
    try {
      const localCart = localStorage.getItem(LOCAL_CART_KEY);
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      console.error('Error reading local cart:', error);
      return [];
    }
  };

  // Save to local cart
  const saveToLocalCart = (items: LocalCartItem[]) => {
    try {
      localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving to local cart:', error);
    }
  };

  // Clear local cart
  const clearLocalCart = () => {
    localStorage.removeItem(LOCAL_CART_KEY);
  };

  // Fetch cart items from Supabase
  const fetchCartItems = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('cart')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching cart items:', error);
        toast({
          title: "Error loading cart",
          description: "Failed to load your cart items",
          variant: "destructive",
        });
        return;
      }

      setCartItems(data || []);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  // Merge local cart with Supabase on login
  const mergeLocalCartWithSupabase = async () => {
    const localCart = getLocalCart();
    if (localCart.length === 0) return;

    setLoading(true);
    try {
      for (const item of localCart) {
        await addToSupabaseCart(item);
      }
      clearLocalCart();
      await fetchCartItems();
      toast({
        title: "Cart synced",
        description: "Your cart items have been synced to your account",
      });
    } catch (error) {
      console.error('Error merging local cart:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add item to Supabase cart
  const addToSupabaseCart = async (params: AddToCartParams) => {
    if (!user) return;

    const { data: existingItem } = await supabase
      .from('cart')
      .select('*')
      .eq('product_id', params.product_id)
      .eq('product_variant', params.product_variant || null)
      .single();

    if (existingItem) {
      // Update existing item
      const { error } = await supabase
        .from('cart')
        .update({ quantity: existingItem.quantity + (params.quantity || 1) })
        .eq('id', existingItem.id);

      if (error) throw error;
    } else {
      // Insert new item
      const { error } = await supabase
        .from('cart')
        .insert([{
          user_id: user.id,
          product_id: params.product_id,
          product_name: params.product_name,
          product_variant: params.product_variant || null,
          product_price: params.product_price,
          product_image: params.product_image || '/placeholder.svg',
          quantity: params.quantity || 1,
        }]);

      if (error) throw error;
    }
  };

  // Add to cart (handles both local and Supabase)
  const addToCart = async (params: AddToCartParams) => {
    try {
      if (user) {
        await addToSupabaseCart(params);
        await fetchCartItems();
        toast({
          title: "Added to cart",
          description: `${params.product_name} has been added to your cart`,
        });
      } else {
        // Handle guest cart
        const localCart = getLocalCart();
        const existingItemIndex = localCart.findIndex(
          item => item.product_id === params.product_id && 
                   item.product_variant === params.product_variant
        );

        if (existingItemIndex > -1) {
          localCart[existingItemIndex].quantity += params.quantity || 1;
        } else {
          localCart.push({
            product_id: params.product_id,
            product_name: params.product_name,
            product_variant: params.product_variant,
            product_price: params.product_price,
            product_image: params.product_image || '/placeholder.svg',
            quantity: params.quantity || 1,
          });
        }

        saveToLocalCart(localCart);
        toast({
          title: "Added to cart",
          description: `${params.product_name} has been added to your cart`,
        });
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive",
      });
    }
  };

  // Update cart item quantity
  const updateCartItem = async (productId: string, productVariant: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCart(productId, productVariant);
      return;
    }

    try {
      if (user) {
        const { error } = await supabase
          .from('cart')
          .update({ quantity })
          .eq('product_id', productId)
          .eq('product_variant', productVariant || null);

        if (error) throw error;
        await fetchCartItems();
      } else {
        const localCart = getLocalCart();
        const itemIndex = localCart.findIndex(
          item => item.product_id === productId && item.product_variant === productVariant
        );

        if (itemIndex > -1) {
          localCart[itemIndex].quantity = quantity;
          saveToLocalCart(localCart);
        }
      }
    } catch (error) {
      console.error('Error updating cart item:', error);
      toast({
        title: "Error",
        description: "Failed to update cart item",
        variant: "destructive",
      });
    }
  };

  // Remove item from cart
  const removeFromCart = async (productId: string, productVariant: string | undefined) => {
    try {
      if (user) {
        const { error } = await supabase
          .from('cart')
          .delete()
          .eq('product_id', productId)
          .eq('product_variant', productVariant || null);

        if (error) throw error;
        await fetchCartItems();
        toast({
          title: "Removed from cart",
          description: "Item has been removed from your cart",
        });
      } else {
        const localCart = getLocalCart();
        const filteredCart = localCart.filter(
          item => !(item.product_id === productId && item.product_variant === productVariant)
        );
        saveToLocalCart(filteredCart);
        toast({
          title: "Removed from cart",
          description: "Item has been removed from your cart",
        });
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast({
        title: "Error",
        description: "Failed to remove item from cart",
        variant: "destructive",
      });
    }
  };

  // Clear entire cart
  const clearCart = async () => {
    try {
      if (user) {
        const { error } = await supabase
          .from('cart')
          .delete()
          .neq('id', '');

        if (error) throw error;
        setCartItems([]);
      } else {
        clearLocalCart();
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  // Refresh cart
  const refreshCart = async () => {
    if (user) {
      await fetchCartItems();
    }
  };

  // Calculate cart count
  const cartCount = user ? 
    cartItems.reduce((total, item) => total + item.quantity, 0) :
    getLocalCart().reduce((total, item) => total + item.quantity, 0);

  // Effects
  useEffect(() => {
    if (user) {
      fetchCartItems();
      
      // Merge local cart if exists
      const localCart = getLocalCart();
      if (localCart.length > 0) {
        mergeLocalCartWithSupabase();
      }
    } else {
      setCartItems([]);
    }
  }, [user]);

  const value = {
    cartItems,
    cartCount,
    loading,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    refreshCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
