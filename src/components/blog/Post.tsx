import type { Dayjs } from 'dayjs';
import type { JSX, RenderableProps } from 'preact';

import Timestamp from '../Timestamp';

import styles from './Post.module.css';

interface Props {
  title: string;
  titleElement?: keyof JSX.IntrinsicElements;
  posted: Date | Dayjs | number | string;
  href?: string;
}

const Post = ({ title, titleElement: Title = 'h1', posted, href, children }: RenderableProps<Props>) => (
  <section class={styles.blogPost}>
    <header>
      <Title>{href ? <a href={href}>{title}</a> : title}</Title>
      <Timestamp value={posted} />
    </header>
    <main>{children}</main>
  </section>
);

export default Post;
