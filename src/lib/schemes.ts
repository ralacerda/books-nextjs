import { z } from "zod";

export const bookStatus = z.enum(["Read", "Started", "Recommended"]);

export const bookFields = z.object({
  bookTitle: z.string(),
  author: z.string(),
  status: bookStatus,
  coverLink: z.string(),
  highlight: z.any().optional(),
  publisher: z.string().optional(),
  category: z.string(),
  publishedDate: z.number(),
});

export type Book = z.infer<typeof bookFields>;
export type BookStatus = z.infer<typeof bookStatus>;

export const bookScheme = z.object({
  sys: z.object({ id: z.string() }),
  fields: bookFields,
});

export const queryScheme = z.object({
  total: z.number(),
  items: z.array(bookScheme),
});
