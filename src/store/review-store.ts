"use client";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Review } from '@/types';
import { reviews as mockReviews } from '@/data/mock-data';
interface ReviewState {
  reviews: Review[];
  addReview: (review: Review) => void;
  updateReviewVotes: (reviewId: string, helpful: boolean, undo: boolean) => void;
  getReviewsByProductId: (productId: string) => Review[];
}
// i used zustand local storage usage for reviews
// i think it is way better than built-in localStorage

export const useReviewStore = create<ReviewState>()(
  persist(
    (set, get) => ({
      reviews: [...mockReviews],
      
      addReview: (review: Review) => 
        set((state) => ({
          reviews: [review, ...state.reviews]
        })),
      
      updateReviewVotes: (reviewId: string, helpful: boolean, undo: boolean) => 
        set((state) => ({
          reviews: state.reviews.map((review) => {
            if (review.id === reviewId) {
              if (helpful) {
                return {
                  ...review,
                  helpful: undo ? review.helpful - 1 : review.helpful + 1
                };
              } else {
                return {
                  ...review,
                  notHelpful: undo ? review.notHelpful - 1 : review.notHelpful + 1
                };
              }
            }
            return review;
          })
        })),
      
      getReviewsByProductId: (productId: string) => {
        return get().reviews.filter(review => review.productId === productId);
      }
    }),
    {
      name: 'reviews-storage',
      partialize: (state) => ({ reviews: state.reviews }),
    }
  )
);
