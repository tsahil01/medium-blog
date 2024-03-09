import { AppBar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkelaton } from "../components/BlogSkelaton";
import { useBlogs } from "../hooks";

export default function Blogs() {
    const {loading, blogs} = useBlogs();
    console.log(blogs);

    if(loading){
      return <>
        <AppBar name="Sahil Tiwaskar"/>
        <BlogSkelaton/>
        </>
    }

  return (
    <>
      <AppBar name="Sahil Tiwaskar" />
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          {blogs.map((blog) => <BlogCard 
          key={blog.id} 
          authorName = {blog.author.name} 
          title = {blog.title}
          content = {blog.content} 
          id = {blog.id}
          />)}
        </div>
      </div>
    </>
  );
}
