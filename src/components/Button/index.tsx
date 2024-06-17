import { ComponentProps } from 'react';

import * as styles from './styles';
import { LoaderCircle } from 'lucide-react';

type ButtonProps = {
  isLoading?: boolean;
} & ComponentProps<'button'>;

export function Button({ children, isLoading, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={styles.saveScheduleButtonCss({ className: rest.className })}
    >
      {isLoading && <LoaderCircle className="text-white animate-spin" />}
      {children}
    </button>
  );
}
