import styles from './styles.module.css';

interface Props {
  currentPath: string;
}

const Header = ({ currentPath }: Props) => (
  <>
    <header class={styles.pageHeader}>
      <h2>Ben Saufley</h2>
      <h3>Software Engineering Leader</h3>
    </header>
    <nav class={styles.stickyNav}>
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
