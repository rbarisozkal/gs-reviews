export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
};

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  highlights: string[];
  pros: string[];
  cons: string[];
  imageUrl: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
  helpful: number;
  notHelpful: number;
}
