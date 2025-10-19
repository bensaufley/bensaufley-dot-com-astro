import type { Dayjs } from 'dayjs';
import { type JSX, type ParentProps, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

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

const Post = ({ title, titleElement: Title = 'h1', posted, href, headerImage, children }: ParentProps<Props>) => (
  <section class={styles.blogPost}>
    <header>
      <Dynamic component={Title}>
        <Show when={href} fallback={title}>
          <a href={href}>{title}</a>
        </Show>
      </Dynamic>
      <Timestamp value={posted} />
      <Show when={!!headerImage}>
        <img src={headerImage!.url} alt={headerImage!.alt} class={styles.headerImage} />
      </Show>
    </header>
    <main>{children}</main>
  </section>
);

export default Post;
