import * as styles from './styles';

type ScheduleButtonProps = {
  onClick: () => void;
  children: string;
  isActive?: boolean;
};

export function ScheduleButton({
  children,
  onClick,
  isActive,
}: ScheduleButtonProps) {
  return (
    <button onClick={onClick} className={styles.buttonCss({ isActive })}>
      {children}
    </button>
  );
}
