import { getTimezone } from '@/utils';

import * as styles from './styles';

export function ScheduleHeader() {
  return (
    <div className={styles.wrapperCss()}>
      <h2 className={styles.titleCss()}>Schedule your session!</h2>
      <span className={styles.subtitleCss()}>Timezone: {getTimezone()}</span>
    </div>
  );
}
