import StarRatingComponent from 'react-star-rating-component';

type StarRatingProps = {
  rating: number;
  ratingCount?: number;
};

export function StarRating({ rating, ratingCount = 5 }: StarRatingProps) {
  return (
    <div className="text-2xl">
      <StarRatingComponent
        editing={false}
        name="start-rating"
        value={rating}
        starCount={ratingCount}
      />
    </div>
  );
}
