"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Rating } from "@/components/ui/rating";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/data/mock-data";

interface ReviewFormProps {
  productId?: string;
  onSubmit: (data: ReviewFormData) => void;
}

export interface ReviewFormData {
  productId: string;
  rating: number;
  title: string;
  review: string;
  name: string;
  email: string;
}

export function ReviewForm({ productId, onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(productId || "");
  const [formData, setFormData] = useState({
    title: "",
    review: "",
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      productId: selectedProduct,
      rating,
      ...formData,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {!productId && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Product</label>
          <Select
            value={selectedProduct}
            onValueChange={setSelectedProduct}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a product to review" />
            </SelectTrigger>
            <SelectContent>
              {products.map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium">Your Rating</label>
        <div className="flex items-center gap-2">
          <Rating value={rating} onChange={setRating} size="lg" />
          <span className="text-sm text-muted-foreground">
            {rating > 0 ? `${rating} out of 5 stars` : "Click to rate"}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium">
          Review Title
        </label>
        <Input
          id="title"
          name="title"
          placeholder="Summarize your experience"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="review" className="text-sm font-medium">
          Your Review
        </label>
        <Textarea
          id="review"
          name="review"
          placeholder="What did you like or dislike? What did you use this product for?"
          rows={6}
          value={formData.review}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Your Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Your Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full">
          Submit Review
        </Button>
      </div>
    </form>
  );
}
