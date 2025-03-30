"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function WriteReview() {
  return (
    <section className="py-16">
      <div className="container">
          <div className="bg-primary/10 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Share Your Experience
              </h2>
              <p className="text-muted-foreground mb-6">
                Have you used any of these products? Help others make informed decisions by sharing your honest review.
              </p>
              <Button asChild>
                <Link href="/submit-review">Write a Review</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="w-64 h-64 rounded-full bg-primary/20 flex items-center justify-center">
                <Image src={"/review.jpg"} alt="Review" width={256} height={256} className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
