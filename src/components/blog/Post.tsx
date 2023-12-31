import type { JSX, RenderableProps } from 'preact';
import type { Dayjs } from 'dayjs';

import styles from './Post.module.css';
import Timestamp from '../Timestamp';

interface Props {
  title: string;
  titleElement?: keyof JSX.IntrinsicElements;
  posted: Date | Dayjs | number | string;
  slug?: string;
}

const Post = ({ title, titleElement: Title = 'h1', posted, slug, children }: RenderableProps<Props>) => (
  <section class={styles.blogPost}>
    <header>
      <Title>{slug ? <a href={`/blog/${slug}`}>{title}</a> : title}</Title>
      <Timestamp value={posted} />
    </header>
    <main>{children}</main>
  </section>
);

export default Post;
