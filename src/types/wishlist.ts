
export interface WishlistItem {
  id: string;
  user_id: string;
  product_id: string;
  product_name: string;
  product_variant?: string;
  product_price: number;
  product_image?: string;
  created_at: string;
  updated_at: string;
}

export interface LocalWishlistItem {
  product_id: string;
  product_name: string;
  product_variant?: string;
  product_price: number;
  product_image?: string;
}

export interface AddToWishlistParams {
  product_id: string;
  product_name: string;
  product_variant?: string;
  product_price: number;
  product_image?: string;
}
