"use client";
import { MainLayout } from "@/components/layout/main-layout";
import { getCategories } from "@/data/mock-data";
import { Categories } from "@/components/main/categories";
import WriteReview from "@/components/main/write-review";
import Hero from "@/components/main/hero";

export default function Home() {
  const categoriesData = getCategories();

  return (
    <MainLayout>
      <Hero />
      <Categories categories={categoriesData} />
      <WriteReview />
    </MainLayout>
  );
}
