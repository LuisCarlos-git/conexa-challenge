import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';

import { getTimezone } from '@/utils';

import { ScheduleHeader } from '.';

vi.mock('@/utils');

describe('<ScheduleButton />', () => {
  it('should render heading and timezone', () => {
    vi.mocked(getTimezone).mockReturnValue('America/Sao_Paulo (-3)');
    const { getByRole, getByText } = render(<ScheduleHeader />);

    expect(
      getByRole('heading', { name: /Schedule your session!/i })
    ).toBeInTheDocument();
    expect(getByText('Timezone: America/Sao_Paulo (-3)'));
  });
});
