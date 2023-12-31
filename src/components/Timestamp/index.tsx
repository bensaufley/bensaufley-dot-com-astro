import dayjs, { type Dayjs, type OpUnitType } from 'dayjs';

import styles from './styles.module.css';
import clsx from 'clsx';

type Props = {
  format?: string;
  inline?: boolean;
  utc?: boolean;
  value: Date | Dayjs | number | string;
} & (
  | {
      truncate?: 'day' | 'hour' | 'minute' | null;
    }
  | {
      day: true;
    }
  | {
      hour: true;
    }
  | {
      minute: true;
    }
);

const Timestamp = ({ format = 'D MMMM, YYYY', utc = true, inline = false, value, ...rest }: Props) => {
  let trunc: OpUnitType | null = 'day';
  if ('truncate' in rest) {
    trunc = rest.truncate;
  } else if ('day' in rest) {
    trunc = 'day';
  } else if ('hour' in rest) {
    trunc = 'hour';
  } else if ('minute' in rest) {
    trunc = 'minute';
  }
  let day = utc ? dayjs.utc(value) : dayjs(value);
  if (trunc) day = day.startOf(trunc);

  return (
    <time class={clsx(styles.timestamp, inline && styles.inline)} dateTime={day.toISOString()}>
      {day.format(format)}
    </time>
  );
};

export default Timestamp;
