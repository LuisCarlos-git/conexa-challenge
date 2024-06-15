import { Avatar, StarRating } from '@/components';
import { formatServiceDetails } from '@/utils';

import * as styles from './styles';

type ProfessionalData = {
  name: string;
  image?: string;
  rating: number;
  servicePrice: number;
  serviceTime: number;
  totalReviews: number;
  profession: string;
  description: string;
};

type ProfessionalCardProps = {
  data: ProfessionalData;
};

export function ProfessionalCard({ data }: ProfessionalCardProps) {
  const {
    name,
    rating,
    serviceTime,
    servicePrice,
    image,
    totalReviews,
    profession,
    description,
  } = data;

  const reviewsLabel = totalReviews === 1 ? 'review' : 'reviews';

  return (
    <div>
      <div className={styles.profileWrapperCss()}>
        <Avatar username={name} image={image} />
        <div>
          <h2 className={styles.professionalNameCss()}>{name}</h2>
          <span className={styles.professionCss()}>{profession}</span>
          <div className={styles.reviewsWrapperCss()}>
            <StarRating rating={rating} />
            <span className={styles.reviewrsCss()}>
              ({totalReviews} {reviewsLabel})
            </span>
          </div>
          <span className={styles.serviceDetailsCss()}>
            {formatServiceDetails({ serviceTime, servicePrice })}
          </span>
        </div>
      </div>
      <p className={styles.descriptionCss()}>{description}</p>
    </div>
  );
}
