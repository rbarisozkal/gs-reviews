import { ProductCard } from "@/components/product/product-card";
import { Link } from "lucide-react";
import { Button } from "../ui/button";
import { products } from "@/data/mock-data";

export default function TopRatedProducts() {
    const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
    return (
        <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Top Rated Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    );
}