import { type CollectionConfig, defineCollection, z } from 'astro:content';

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

const personSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string(),
});

const books = defineCollection({
  type: 'content',
  schema: ({ image }) => {
    const bookBaseSchema = z.object({
      title: z.string(),
      subtitle: z.string().nullable(),
      authors: z.array(personSchema),
      narrators: z.array(personSchema).nullable(),
      yearPublished: z.number().nullable(),
      cover: image().nullable(),
      read: z.coerce.date().nullable(),
      isbn10: z.string().nullable(),
      isbn13: z.string().nullable(),
      asin: z.string().nullable(),
      hardcoverUrl: z.string().url().nullable().optional(),
    });

    return z.union([
      bookBaseSchema.extend({
        read: z.coerce.date(),
        rating: z.number().min(0).max(5).nullable(),
        reading: z.literal(false),
      }),
      bookBaseSchema.extend({
        read: z.null(),
        reading: z.boolean(),
        rating: z.null(),
      }),
    ]);
  },
});

type InferCollectionSchema<T extends CollectionConfig<any>> = T extends CollectionConfig<infer U> ? z.infer<U> : never;

export type BookFrontmatter = InferCollectionSchema<typeof books>;
export type PostFrontmatter = InferCollectionSchema<typeof posts>;
export type Person = z.infer<typeof personSchema>;

// eslint-disable-next-line import/prefer-default-export
export const collections = { books, posts };
