"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Expert Product Reviews You Can Trust
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Discover the best products with our in-depth reviews and ratings.
          We test everything so you don&apos;t have to.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/category">Browse Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}