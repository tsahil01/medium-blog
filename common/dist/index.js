"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInput = exports.createPostInput = exports.signinInput = void 0;
const zod_1 = require("zod");
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
exports.createPostInput = zod_1.z.object({
    title: zod_1.z.string().min(3, "Title should be greater than 3 char"),
    content: zod_1.z.string().min(5, "Content should be greater than 5 char")
});
exports.updatePostInput = zod_1.z.object({
    title: zod_1.z.string().min(3, "Title should be greater than 3 char").optional(),
    content: zod_1.z.string().min(5, "Content should be greater than 5 char").optional()
});
