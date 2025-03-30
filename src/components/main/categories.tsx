"use client";

import { Category } from "@/types";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface CategoriesProps {
  categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-video relative bg-muted">
                    {category.id === "electronics" && (
                      <Image 
                        src="/electronics.jpg" 
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    )}
                    {category.id === "cars" && (
                      <Image 
                        src="/cars.webp" 
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    )}
                    {category.id === "beauty" && (
                      <Image 
                        src="/beauty.webp" 
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    )}
                    {category.id === "home" && (
                      <Image 
                        src="/home.jpg" 
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
}