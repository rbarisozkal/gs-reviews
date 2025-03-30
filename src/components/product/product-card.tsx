"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <div className="aspect-square relative bg-muted">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              fill 
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <div className="flex items-center gap-2 mb-2">
            <Rating value={product.rating} />
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <Button variant="secondary" size="sm">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
