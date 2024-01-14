import Circle from 'bootstrap-icons/icons/circle.svg?react';
import CircleFill from 'bootstrap-icons/icons/circle-fill.svg?react';
import CircleHalf from 'bootstrap-icons/icons/circle-half.svg?react';
import { useEffect, useState } from 'preact/hooks';

import styles from './styles.module.css';

const Footer = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(() => {
    if (typeof window === 'undefined') return null;
    return window.localStorage.getItem('theme') as 'light' | 'dark' | null;
  });

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    if (theme) document.body.classList.add(theme);
  }, [theme]);

  const updateTheme = (newTheme: 'light' | 'dark' | null) => {
    setTheme(newTheme);
    if (typeof window === 'undefined') return;

    if (!newTheme) window.localStorage.removeItem('theme');
    else window.localStorage.setItem('theme', newTheme);
  };

  return (
    <footer class={styles.pageFooter}>
      <p>
        ©{new Date().getFullYear()} <a href="/contact">Ben Saufley</a>
      </p>
      <div class={styles.themeToggle}>
        <button onClick={() => updateTheme('light')} class={styles.light} title="Use Light Theme">
          <Circle />
        </button>
        <button onClick={() => updateTheme(null)} class={styles.system} title="Use System Theme">
          <CircleHalf />
        </button>
        <button onClick={() => updateTheme('dark')} class={styles.dark} title="Use Dark Theme">
          <CircleFill />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
