import { Category, Product, Review } from "@/types";

export const categories: Category[] = [
  {
    id: "beauty",
    name: "Beauty",
    slug: "beauty",
    description: "Skincare, makeup, and beauty products reviewed by experts",
    imageUrl: "/beauty.webp",
  },
  {
    id: "cars",
    name: "Cars",
    slug: "cars",
    description: "Expert reviews on the latest cars, SUVs, and trucks",
    imageUrl: "/cars.webp",
  },
  {
    id: "electronics",
    name: "Electronics",
    slug: "electronics",
    description: "The latest gadgets and tech products reviewed",
    imageUrl: "/electronics.jpg",
  },
  {
    id: "home",
    name: "Home",
    slug: "home",
    description: "Furniture, appliances, and home goods reviewed",
    imageUrl: "/home.jpg",
  },
];

export const products: Product[] = [
  {
    id: "beauty-1",
    name: "Luxury Face Serum",
    slug: "luxury-face-serum",
    description: "A high-end face serum that hydrates and rejuvenates skin",
    categoryId: "beauty",
    imageUrl: "/beauty.webp",
    rating: 4.5,
    reviewCount: 128,
    price: 89.99,
    highlights: [
      "Contains hyaluronic acid and vitamin C",
      "Suitable for all skin types",
      "Cruelty-free and vegan",
    ],
    pros: [
      "Visible results within 2 weeks",
      "Lightweight formula",
      "No artificial fragrances",
    ],
    cons: [
      "Premium price point",
      "May cause sensitivity for some users",
    ],
  },
  {
    id: "beauty-2",
    name: "Premium Mascara",
    slug: "premium-mascara",
    description: "Lengthening and volumizing mascara that doesn't smudge",
    categoryId: "beauty",
    imageUrl: "/beauty.webp",
    rating: 4.2,
    reviewCount: 87,
    price: 24.99,
    highlights: [
      "Waterproof formula",
      "Buildable coverage",
      "Enriched with lash-strengthening peptides",
    ],
    pros: [
      "Long-lasting wear",
      "Easy to remove with makeup remover",
      "No clumping",
    ],
    cons: [
      "Brush can be too large for some users",
      "May dry out faster than other mascaras",
    ],
  },
  {
    id: "cars-1",
    name: "Electric SUV 2025",
    slug: "electric-suv-2025",
    description: "A fully electric SUV with impressive range and features",
    categoryId: "cars",
    imageUrl: "/cars.webp",
    rating: 4.7,
    reviewCount: 42,
    price: 58999,
    highlights: [
      "350-mile range on a single charge",
      "Fast charging capability",
      "Advanced driver assistance features",
    ],
    pros: [
      "Spacious interior",
      "Quiet and smooth ride",
      "Low maintenance costs",
    ],
    cons: [
      "Higher upfront cost than gas alternatives",
      "Charging infrastructure still developing",
    ],
  },
  {
    id: "cars-2",
    name: "Luxury Sedan 2025",
    slug: "luxury-sedan-2025",
    description: "A premium sedan with cutting-edge technology and comfort",
    categoryId: "cars",
    imageUrl: "/cars.webp",
    rating: 4.4,
    reviewCount: 36,
    price: 62499,
    highlights: [
      "Premium leather interior",
      "Advanced infotainment system",
      "Semi-autonomous driving capabilities",
    ],
    pros: [
      "Exceptional comfort",
      "Powerful engine options",
      "High safety ratings",
    ],
    cons: [
      "Average fuel economy",
      "Limited rear headroom",
    ],
  },
];

export const reviews: Review[] = [
  {
    id: "review-1",
    productId: "beauty-1",
    userId: "user-1",
    userName: "Sarah Johnson",
    rating: 5,
    title: "Amazing results!",
    content: "I've been using this serum for a month and my skin has never looked better. The fine lines around my eyes have noticeably reduced, and my skin feels more hydrated throughout the day. Definitely worth the price!",
    createdAt: "2025-02-15T09:24:00Z",
    helpful: 42,
    notHelpful: 3,
  },
  {
    id: "review-2",
    productId: "beauty-1",
    userId: "user-2",
    userName: "Michael Chen",
    rating: 4,
    title: "Good but pricey",
    content: "The serum definitely improved my skin's texture and brightness, but I'm not sure if the results justify the high price tag. I might try something more affordable next time.",
    createdAt: "2025-02-10T14:35:00Z",
    helpful: 28,
    notHelpful: 5,
  },
  {
    id: "review-3",
    productId: "cars-1",
    userId: "user-3",
    userName: "Emily Rodriguez",
    rating: 5,
    title: "Best car I've ever owned",
    content: "This electric SUV exceeded all my expectations. The range is actually better than advertised, and the tech features make driving a joy. I was hesitant about going electric, but now I can't imagine going back to gas.",
    createdAt: "2025-03-05T18:12:00Z",
    helpful: 36,
    notHelpful: 2,
  },
  {
    id: "review-4",
    productId: "cars-1",
    userId: "user-4",
    userName: "David Wilson",
    rating: 4,
    title: "Great car with minor issues",
    content: "Overall, I'm very happy with this SUV. The performance is excellent and it's very comfortable for long trips. My only complaint is that the infotainment system can be a bit laggy at times. Also, finding charging stations on road trips requires some planning.",
    createdAt: "2025-02-28T11:45:00Z",
    helpful: 22,
    notHelpful: 4,
  },
];

// Helper functions to get data
export const getCategories = () => categories;
export const getCategory = (slug: string) => categories.find(c => c.slug === slug);
export const getProducts = () => products;
export const getProductsByCategory = (categoryId: string) => products.filter(p => p.categoryId === categoryId);
export const getProduct = (slug: string) => products.find(p => p.slug === slug);
export const getReviews = (productId: string) => reviews.filter(r => r.productId === productId);
