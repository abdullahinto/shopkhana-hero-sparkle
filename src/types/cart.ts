
export interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  product_name: string;
  product_variant?: string;
  product_price: number;
  product_image?: string;
  quantity: number;
  created_at: string;
  updated_at: string;
}

export interface LocalCartItem {
  product_id: string;
  product_name: string;
  product_variant?: string;
  product_price: number;
  product_image?: string;
  quantity: number;
}

export interface AddToCartParams {
  product_id: string;
  product_name: string;
  product_variant?: string;
  product_price: number;
  product_image?: string;
  quantity?: number;
}
