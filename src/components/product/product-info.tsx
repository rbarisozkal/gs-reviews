"use client";

import { Rating } from "@/components/ui/rating";
import { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
        <span className="text-muted-foreground text-lg">{product.name}</span>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center gap-2 mb-4">
          <Rating value={product.rating} />
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount} reviews)
          </span>
        </div>
        <p className="text-xl font-semibold mb-6">${product.price.toFixed(2)}</p>
        <p className="text-muted-foreground mb-6">{product.description}</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.highlights.map((highlight, index) => (
                <li key={index} className="text-muted-foreground">{highlight}</li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2 flex items-center">
                <span className="text-green-600 mr-2">✓</span> Pros
              </h3>
              <ul className="space-y-1">
                {product.pros.map((pro, index) => (
                  <li key={index} className="text-muted-foreground pl-6">• {pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2 flex items-center">
                <span className="text-red-600 mr-2">✗</span> Cons
              </h3>
              <ul className="space-y-1">
                {product.cons.map((con, index) => (
                  <li key={index} className="text-muted-foreground pl-6">• {con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
