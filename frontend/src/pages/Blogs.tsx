import { BlogCard } from "../components/BlogCard";

export default function Blogs() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl">
        <BlogCard
          authorName="John Doe"
          title="My first blog"
          content="This is my first blog. I am so excited to write this blog. I hope you will like it.This is my first blog. I am so excited to write this blog. I hope you will like it.This is my first blog. I am so excited to write this blog. I hope you will like it.This is my first blog. I am so excited to write this blog. I hope you will like it."
          publishedAt="01 Dec 2024"
        />
        <BlogCard
          authorName="Jane Smith"
          title="Exploring the Universe"
          content="In my exploration of the vast universe, I've come across breathtaking wonders and cosmic mysteries. Join me on this cosmic journey as we delve into the beauty of galaxies, the enigma of black holes, and the fascinating dance of celestial bodies. Buckle up for an interstellar adventure like no other!"
          publishedAt="15 Feb 2025"
        />
        <BlogCard
          authorName="Alex Turner"
          title="The Art of Coffee Brewing"
          content="Embark on a sensory experience as we dive into the art of brewing the perfect cup of coffee. From selecting the finest beans to mastering the grind and pour-over techniques, this blog will awaken your inner barista and elevate your coffee game. Get ready to savor every sip of the rich, aromatic goodness!"
          publishedAt="10 Mar 2025"
        />
        <BlogCard
          authorName="Emily Johnson"
          title="Discovering Hidden Gems"
          content="Join me on a journey of exploration as I uncover hidden gems in unexpected places. From quaint bookstores tucked away in bustling cities to charming cafes with secret gardens, this blog will guide you to delightful treasures that add a touch of magic to everyday life. Let's embrace the joy of discovery together!"
          publishedAt="22 Apr 2025"
        />
        <BlogCard
          authorName="Mark Anderson"
          title="Fitness Fundamentals"
          content="Embarking on a fitness journey can be both challenging and rewarding. In this blog, I share essential tips and insights on building a strong foundation for a healthier lifestyle. From effective workout routines to mindful nutrition, let's navigate the world of fitness together and unlock the potential of a fitter, happier you!"
          publishedAt="05 May 2025"
        />
      </div>
    </div>
  );
}
