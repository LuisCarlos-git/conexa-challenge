import * as styles from './styles';

type ScheduleButtonProps = {
  onClick: () => void;
  children: string;
  isActive?: boolean;
  disabled?: boolean;
};

export function ScheduleButton({
  children,
  onClick,
  isActive,
  disabled,
}: ScheduleButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={styles.buttonCss({ isActive })}
    >
      {children}
    </button>
  );
}
