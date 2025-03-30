"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReviewForm, ReviewFormData } from "@/components/review/review-form";
import { ReviewCard } from "@/components/review/review-card";
import { Product, Review } from "@/types";

interface ReviewTabsProps {
  product: Product;
  reviews: Review[];
  onReviewSubmit?: (data: ReviewFormData) => void;
}

export function ReviewTabs({ product, reviews, onReviewSubmit }: ReviewTabsProps) {
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  const handleReviewSubmit = (data: ReviewFormData) => {
    if (onReviewSubmit) {
      onReviewSubmit(data);
    }
    
    setIsReviewSubmitted(true);
    
    setTimeout(() => {
      setIsReviewDialogOpen(false);
      setIsReviewSubmitted(false);
    }, 2000);
  };

  return (
    <Tabs defaultValue="reviews" className="mt-8">
      <TabsList className="mb-6">
        <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
        <TabsTrigger value="details">Product Details</TabsTrigger>
      </TabsList>
      
      <TabsContent value="reviews">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
              <DialogTrigger asChild>
                <Button>Write a Review</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>
                    {isReviewSubmitted ? "Thank You!" : `Review ${product.name}`}
                  </DialogTitle>
                </DialogHeader>
                {isReviewSubmitted ? (
                  <div className="py-6 text-center">
                    <p className="text-muted-foreground mb-2">
                      Your review has been submitted successfully!
                    </p>
                    <p className="text-sm text-muted-foreground">
                      This dialog will close automatically...
                    </p>
                  </div>
                ) : (
                  <ReviewForm 
                    productId={product.id} 
                    onSubmit={handleReviewSubmit} 
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
          
          {reviews.length === 0 ? (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-medium mb-2">No reviews yet</h3>
              <p className="text-muted-foreground mb-4">
                Be the first to review this product
              </p>
              <Button onClick={() => setIsReviewDialogOpen(true)}>
                Write a Review
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="details">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Product Details</h2>
          <p className="text-muted-foreground">
            {product.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Specifications</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4 p-3 border-b">
                  <span className="font-medium">Category</span>
                  <span className="text-muted-foreground">{product.categoryId}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 p-3 border-b">
                  <span className="font-medium">Rating</span>
                  <span className="text-muted-foreground">{product.rating} out of 5</span>
                </div>
                <div className="grid grid-cols-2 gap-4 p-3 border-b">
                  <span className="font-medium">Reviews</span>
                  <span className="text-muted-foreground">{product.reviewCount}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Verdict</h3>
              <p className="text-muted-foreground mb-4">
                After thorough testing and evaluation, our experts have given this product a rating of {product.rating} out of 5 stars. This product offers excellent value for its price point and stands out in its category.
              </p>
              <Button variant="outline" asChild>
                <Link href={`/category/${product.categoryId}`}>
                  View Similar Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
