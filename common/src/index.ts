import { z } from "zod";

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string()
});

export type signInParams = z.infer<typeof signinInput>;

export const createPostInput  = z.object({
    title: z.string().min(3, "Title should be greater than 3 char"),
    content: z.string().min(5, "Content should be greater than 5 char")
});

export type createPostParams = z.infer<typeof createPostInput >;

export const updatePostInput  = z.object({
    title: z.string().min(3, "Title should be greater than 3 char").optional(),
    content: z.string().min(5, "Content should be greater than 5 char").optional()
});

export type updatePostParams = z.infer<typeof updatePostInput>;

