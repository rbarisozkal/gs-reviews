"use client";

import { useState } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReviewForm, ReviewFormData } from "@/components/review/review-form";

export default function SubmitReviewPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (data: ReviewFormData) => {
    console.log(data);
    
    // In a real application, we would send this data to an API
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <MainLayout>
        <div className="container py-20">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Thank You For Your Review!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Your review has been submitted successfully. Our team will review it shortly.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild>
                  <Link href="/">Return Home</Link>
                </Button>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Submit Another Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Write a Review</h1>
          <p className="text-muted-foreground mb-8">
            Share your experience with a product to help other shoppers make informed decisions.
          </p>

          <Card>
            <CardContent className="pt-6">
              <ReviewForm onSubmit={handleSubmit} />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
