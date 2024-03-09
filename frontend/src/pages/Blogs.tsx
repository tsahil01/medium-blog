import { AppBar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export default function Blogs() {
    const {loading, blogs} = useBlogs();
    console.log(blogs);

    if(loading){
      return <>
        <AppBar name="Sahil Tiwaskar"/>
        <div>Loading...</div>
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
          publishedAt = {blog.id} 
          id = {blog.id}
          />)}
        </div>
      </div>
    </>
  );
}
