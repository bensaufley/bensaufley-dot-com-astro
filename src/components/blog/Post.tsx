import type { Dayjs } from 'dayjs';
import type { JSX, RenderableProps } from 'preact';

import Timestamp from '../Timestamp';

import styles from './Post.module.css';

interface Props {
  title: string;
  titleElement?: keyof JSX.IntrinsicElements;
  posted: Date | Dayjs | number | string;
  href?: string;
  headerImage?:
    | {
        url: string;
        alt: string;
      }
    | undefined;
}

const Post = ({ title, titleElement: Title = 'h1', posted, href, headerImage, children }: RenderableProps<Props>) => (
  <section class={styles.entry}>
    <header>
      <Title>{href ? <a href={href}>{title}</a> : title}</Title>
      <Timestamp value={posted} />
      {headerImage && <img src={headerImage.url} alt={headerImage.alt} class={styles.headerImage} />}
    </header>
    <main>{children}</main>
  </section>
);

export default Post;
