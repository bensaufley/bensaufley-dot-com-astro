import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
  currentPath: string;
}

const Header = ({ currentPath }: Props) => (
  <>
    <header class={styles.pageHeader}>
      <h2 class={styles.name}>
        <span class={styles.firstName}>Ben</span> <span class={styles.lastName}>Saufley</span>
      </h2>
      <h3 class={styles.position}>
        Software <br class={styles.desktopBreak} />
        Engineering Leader
      </h3>
    </header>
    <nav class={clsx('sticky', styles.stickyNav)}>
      <a href="/" class={styles.name}>
        BS
      </a>
      <ul>
        <li>
          <a href="/" class={currentPath === '/' ? styles.active : ''}>
            Home
          </a>
        </li>
        <li>
          <a href="/projects" class={currentPath === '/projects' ? styles.active : ''}>
            Projects
          </a>
        </li>
        <li>
          <a href="/resume" class={currentPath === '/resume' ? styles.active : ''}>
            Résumé
          </a>
        </li>
        <li>
          <a href="/contact" class={currentPath === '/contact' ? styles.active : ''}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
