"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Review } from "@/types";
import { useState, useEffect } from "react";
import { useReviewStore } from "@/store/review-store";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [userVote, setUserVote] = useState<'helpful' | 'not-helpful' | null>(null);
  const updateReviewVotes = useReviewStore(state => state.updateReviewVotes);
  const reviews = useReviewStore(state => state.reviews);
  
  // Use local state for the current review to avoid hydration issues
  const [currentReview, setCurrentReview] = useState<Review>(review);
  
  // Update the current review from the store after component mounts
  useEffect(() => {
    const storeReview = reviews.find(r => r.id === review.id);
    if (storeReview) {
      setCurrentReview(storeReview);
    }
  }, [reviews, review.id]);

  const handleHelpfulClick = () => {
    if (userVote === 'helpful') {
      // User is un-voting
      updateReviewVotes(review.id, true, true);
      setUserVote(null);
    } else {
      // User is voting helpful
      updateReviewVotes(review.id, true, false);
      
      if (userVote === 'not-helpful') {
        // If they previously voted not helpful, remove that vote
        updateReviewVotes(review.id, false, true);
      }
      
      setUserVote('helpful');
    }
  };

  const handleNotHelpfulClick = () => {
    if (userVote === 'not-helpful') {
      // User is un-voting
      updateReviewVotes(review.id, false, true);
      setUserVote(null);
    } else {
      // User is voting not helpful
      updateReviewVotes(review.id, false, false);
      
      if (userVote === 'helpful') {
        // If they previously voted helpful, remove that vote
        updateReviewVotes(review.id, true, true);
      }
      
      setUserVote('not-helpful');
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/avatar.jpg" alt={currentReview.userName} />
              <AvatarFallback>{currentReview.userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{currentReview.userName}</div>
              <div className="text-xs text-muted-foreground">
                {new Date(currentReview.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <Badge variant="outline">{currentReview.rating} / 5</Badge>
        </div>
        
        <h4 className="text-lg font-semibold mb-2">{currentReview.title}</h4>
        <p className="text-muted-foreground mb-4">{currentReview.content}</p>
        
        <div className="flex items-center gap-4">
          <button 
            className={`flex items-center gap-1 text-sm ${
              userVote === 'helpful' 
                ? 'text-primary font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={handleHelpfulClick}
          >
            <ThumbsUp className="h-4 w-4" />
            <span>Helpful ({currentReview.helpful})</span>
          </button>
          <button 
            className={`flex items-center gap-1 text-sm ${
              userVote === 'not-helpful' 
                ? 'text-primary font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={handleNotHelpfulClick}
          >
            <ThumbsDown className="h-4 w-4" />
            <span>Not Helpful ({currentReview.notHelpful})</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
