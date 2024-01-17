import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = { posts };
