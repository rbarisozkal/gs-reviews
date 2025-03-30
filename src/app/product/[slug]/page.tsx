"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/data/mock-data";
import { ReviewFormData } from "@/components/review/review-form";
import { ReviewTabs } from "@/components/review/review-tabs";
import { ProductInfo } from "@/components/product/product-info";
import { useReviewStore } from "@/store/review-store";
import { useEffect, useState } from "react";
import { Review } from "@/types";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const product = getProduct(slug);
  const { getReviewsByProductId, addReview } = useReviewStore();
  const [reviews, setReviews] = useState<Review[]>([]);
  
  useEffect(() => {
    if (product) {
      setReviews(getReviewsByProductId(product.id));
    }
  }, [product, getReviewsByProductId]);
  
  if (!product) {
    return (
      <MainLayout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const handleReviewSubmit = (data: ReviewFormData) => {
    console.log("Review submitted:", data);
    
    const newReview = {
      id: `review-${Date.now()}`,
      productId: product.id,
      userId: `user-${Date.now()}`,
      userName: data.name,
      rating: data.rating,
      title: data.title,
      content: data.review,
      createdAt: new Date().toISOString(),
      helpful: 0,
      notHelpful: 0,
    };
  
    addReview(newReview);
    setReviews(prev => [newReview, ...prev]);
    product.reviewCount += 1;
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <ProductInfo product={product} />
        <ReviewTabs 
          reviews={reviews} 
          product={product} 
          onReviewSubmit={handleReviewSubmit} 
        />
      </div>
    </MainLayout>
  );
}
