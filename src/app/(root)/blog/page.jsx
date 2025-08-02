import BlogPostCard from "@/src/components/BlogPostCard";
import React from "react";
import post1 from "@/public/assets/post1.png";
import post2 from "@/public/assets/post2.png";
import post3 from "@/public/assets/post3.png";
import post4 from "@/public/assets/post4.png";
import post5 from "@/public/assets/post5.png";
import post6 from "@/public/assets/post6.png";

const posts = [
  {
    img: post1,
    title: "Software Enhance You Photo Better Imgupscaler Vs. icons8 Vs. Gimp",
    about: "By Imgupscaler - 20 March,2022",
    link: "/blog",
  },
  {
    img: post2,
    title: "Software Enhance You Photo Better Imgupscaler Vs. icons8 Vs. Gimp",
    about: "By Imgupscaler - 20 March,2022",
    link: "/blog",
  },
  {
    img: post3,
    title: "Software Enhance You Photo Better Imgupscaler Vs. icons8 Vs. Gimp",
    about: "By Imgupscaler - 20 March,2022",
    link: "/blog",
  },
  {
    img: post4,
    title: "Software Enhance You Photo Better Imgupscaler Vs. icons8 Vs. Gimp",
    about: "By Imgupscaler - 20 March,2022",
    link: "/blog",
  },
  {
    img: post5,
    title: "Software Enhance You Photo Better Imgupscaler Vs. icons8 Vs. Gimp",
    about: "By Imgupscaler - 20 March,2022",
    link: "/blog",
  },
  {
    img: post6,
    title: "Software Enhance You Photo Better Imgupscaler Vs. icons8 Vs. Gimp",
    about: "By Imgupscaler - 20 March,2022",
    link: "/blog",
  },
];

const BlogPage = () => {
  return (
    <section className="mt-48 wrapper">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {posts.map((post, index) => (
          <BlogPostCard
            img={post.img}
            title={post.title}
            about={post.about}
            key={index}
            link={post.link}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
