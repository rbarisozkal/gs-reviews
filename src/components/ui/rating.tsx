import React from "react";
import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  onChange?: (value: number) => void;
}

export function Rating({
  value,
  max = 5,
  size = "md",
  className,
  onChange,
}: RatingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 >= 0.5;

    for (let i = 1; i <= max; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star
            key={i}
            className={cn(
              sizeClasses[size],
              "fill-yellow-400 text-yellow-400",
              onChange && "cursor-pointer"
            )}
            onClick={() => onChange?.(i)}
          />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <StarHalf
            key={i}
            className={cn(
              sizeClasses[size],
              "fill-yellow-400 text-yellow-400",
              onChange && "cursor-pointer"
            )}
            onClick={() => onChange?.(i)}
          />
        );
      } else {
        stars.push(
          <Star
            key={i}
            className={cn(
              sizeClasses[size],
              "text-gray-300",
              onChange && "cursor-pointer"
            )}
            onClick={() => onChange?.(i)}
          />
        );
      }
    }

    return stars;
  };

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {renderStars()}
    </div>
  );
}
