/*
  # Add Product Reviews Table

  1. New Tables
    - `product_reviews` - Store user reviews for products
  
  2. Security
    - Enable RLS
    - Users can only edit their own reviews
    - All users can read reviews
*/

-- Create product_reviews table
CREATE TABLE public.product_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  comment TEXT,
  verified_purchase BOOLEAN DEFAULT false,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;

-- Reviews policies
CREATE POLICY "Anyone can view reviews" 
  ON public.product_reviews 
  FOR SELECT 
  TO public
  USING (true);

CREATE POLICY "Users can insert their own reviews" 
  ON public.product_reviews 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" 
  ON public.product_reviews 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reviews" 
  ON public.product_reviews 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Prevent duplicate reviews from same user for same product
CREATE UNIQUE INDEX product_reviews_user_product_idx 
ON public.product_reviews (user_id, product_id);

-- Add indexes for performance
CREATE INDEX idx_reviews_product_id ON public.product_reviews(product_id);
CREATE INDEX idx_reviews_rating ON public.product_reviews(rating);
CREATE INDEX idx_reviews_created_at ON public.product_reviews(created_at);

-- Add trigger for updated_at
CREATE TRIGGER update_reviews_updated_at 
BEFORE UPDATE ON public.product_reviews 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();