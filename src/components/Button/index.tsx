import { ComponentProps } from 'react';

import * as styles from './styles';

type ButtonProps = ComponentProps<'button'>;

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={styles.saveScheduleButtonCss({ className: props.className })}
    />
  );
}
