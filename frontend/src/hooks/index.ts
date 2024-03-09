import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blogs {
    id: number;
    title: string;
    content: string;
    author: {
        name: string;
    }
    publishedAt: string;
}

export const useBlogs = () =>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState(<Blogs[]>[]);

    useEffect(() => {
        async function getBlogs() {
            const res = await fetch(`${BACKEND_URL}/blog/bulk`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });
            const data = await res.json();
            setBlogs(data.posts);
            setLoading(false);
        }
        getBlogs();
    }, []);

    return {blogs, loading};

}

export const useBlog = (id: string | number) => {
    console.log("ID ", id);
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState(<Blogs>{});

    useEffect(() => {
        async function getBlog() {
            const res = await fetch(`${BACKEND_URL}/blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });
            const data = await res.json();
            console.log("Data ", data);
            setBlog(data.post);
            setLoading(false);
        }
        getBlog();
    }, []);

    return {blog, loading};
}