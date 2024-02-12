import Image from "next/image";
import post1 from "@/public/assets/post1.png";
import React from "react";
import Link from "next/link";

const BlogPostCard = ({ img, title, about, link }) => {
  return (
    <div className="space-y-2">
      <div className=" relative rounded-lg">
        <Image src={img} alt="image" height={330} width={631} />
        <p className="btn !rounded-b-none absolute bottom-0 left-0">
          Blur Image
        </p>
      </div>
      <div>
        <h4 className="text-lg">{title}</h4>
        <p className="text-sm ">{about}</p>
        <p>
          <Link href={link} className="text-primary">
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogPostCard;
