/*
  # Fix Foreign Key References

  1. Updates
    - Fix foreign key references to point to auth.users instead of users
    - Ensure all constraints are properly set up
  
  2. Security
    - Verify RLS policies are working correctly
    - Add any missing indexes for performance
*/

-- Fix foreign key constraint in profiles table
ALTER TABLE public.profiles 
DROP CONSTRAINT IF EXISTS profiles_id_fkey;

ALTER TABLE public.profiles 
ADD CONSTRAINT profiles_id_fkey 
FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Fix foreign key constraint in cart table  
ALTER TABLE public.cart 
DROP CONSTRAINT IF EXISTS cart_user_id_fkey;

ALTER TABLE public.cart 
ADD CONSTRAINT cart_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Fix foreign key constraint in wishlist table
ALTER TABLE public.wishlist 
DROP CONSTRAINT IF EXISTS wishlist_user_id_fkey;

ALTER TABLE public.wishlist 
ADD CONSTRAINT wishlist_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Add performance indexes
CREATE INDEX IF NOT EXISTS idx_cart_user_id ON public.cart(user_id);
CREATE INDEX IF NOT EXISTS idx_cart_created_at ON public.cart(created_at);
CREATE INDEX IF NOT EXISTS idx_wishlist_user_id ON public.wishlist(user_id);
CREATE INDEX IF NOT EXISTS idx_wishlist_created_at ON public.wishlist(created_at);

-- Add index for product lookups (if you plan to query by product_id)
CREATE INDEX IF NOT EXISTS idx_cart_product_id ON public.cart(product_id);
CREATE INDEX IF NOT EXISTS idx_wishlist_product_id ON public.wishlist(product_id);