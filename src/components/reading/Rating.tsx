import clsx, { type ClassValue } from 'clsx';
import { useEffect, useRef, useState } from 'preact/hooks';

import styles from './styles.module.css';

const formatter = Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const Rating = ({ class: className, rating }: { class?: ClassValue; rating: number | null }) => {
  const [shown, setShown] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        setShown(!!entries.at(0)?.isIntersecting);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, []);

  if (!rating) return null;

  return (
    <div
      ref={ref}
      class={clsx(styles.rating, className, shown && styles.visible)}
      style={`--rating: ${rating}`}
      title={`Rating: ${formatter.format(rating)} / 5`}
    />
  );
};

export default Rating;
