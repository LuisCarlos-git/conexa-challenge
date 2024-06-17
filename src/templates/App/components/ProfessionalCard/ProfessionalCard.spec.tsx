import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { ProfessionalCard } from '.';

describe('<ProfessionalCard />', () => {
  it('should render professional data', () => {
    render(
      <ProfessionalCard
        data={{
          name: 'Luis Carlos',
          image: 'https://avatar.iran.liara.run/public/26',
          rating: 4,
          servicePrice: 200,
          serviceTime: 120,
          totalReviews: 1,
          profession: 'Psicologist',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        }}
      />
    );
  });
});
