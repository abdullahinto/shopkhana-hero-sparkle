
-- Create wishlist table to store user wishlist items
CREATE TABLE public.wishlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  product_variant TEXT,
  product_price INTEGER NOT NULL,
  product_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.wishlist ENABLE ROW LEVEL SECURITY;

-- Create policies for the wishlist table
CREATE POLICY "Users can view their own wishlist items" 
  ON public.wishlist 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own wishlist items" 
  ON public.wishlist 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own wishlist items" 
  ON public.wishlist 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own wishlist items" 
  ON public.wishlist 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create unique constraint to prevent duplicate wishlist items
CREATE UNIQUE INDEX wishlist_user_product_variant_idx 
ON public.wishlist (user_id, product_id, product_variant);

-- Trigger to automatically update updated_at
CREATE TRIGGER update_wishlist_updated_at 
BEFORE UPDATE ON public.wishlist 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
