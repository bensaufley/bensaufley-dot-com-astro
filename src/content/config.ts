import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      headerImage: image().optional(),
      headerImageAlt: z.string().optional(),
      preview: z.string().optional(),
    }),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = { posts };
