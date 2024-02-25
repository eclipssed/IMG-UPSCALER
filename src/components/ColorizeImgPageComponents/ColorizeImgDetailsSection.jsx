import Image from "next/image";
import colorizeSectionDetailImg1 from "@/public/assets/colorizeSectionDetailImg1.png";
import colorizeSectionDetailImg2 from "@/public/assets/colorizeSectionDetailImg2.png";
import colorizeSectionDetailImg3 from "@/public/assets/colorizeSectionDetailImg3.png";
import React from "react";

const ColorizeImgDetailsSection = () => {
  return (
    <section className="border-2 border-t-primary border-b-primary border-dashed mt-36">
      <div className="wrapper py-8">
        {/* 1 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">Photo Colorizer</h2>
            <p>
              Whether you want to colorize old family photos, classic movie
              screenshots or black and white landscapes. You can access
              high-quality colour photos in a few seconds without any learning
              curve. Try our AI colorizer now and prepare a gift for your
              family.Our AI Photo Colorizer uses AI coloring technology and deep
              learning to add consistent and natural colors to your old photos.
              you can colorize old pictures of families, historical figures,
              ancestors, movies, etc. Reimagine the past by coloring pictures of
              ancestors and historical figures. Restore old images with stunning
              colors. Reimagine the past by colorizing pictures of ancestors and
              historic figures.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              alt="img"
              src={colorizeSectionDetailImg1}
              height={483}
              width={530}
            />
          </div>
        </div>
        {/* 2 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="mx-auto">
            <Image
              alt="img"
              src={colorizeSectionDetailImg2}
              height={483}
              width={530}
            />
          </div>
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">Photo Colorizer</h2>
            <p>
              Whether you want to colorize old family photos, classic movie
              screenshots or black and white landscapes. You can access
              high-quality colour photos in a few seconds without any learning
              curve. Try our AI colorizer now and prepare a gift for your
              family.Our AI Photo Colorizer uses AI coloring technology and deep
              learning to add consistent and natural colors to your old photos.
              you can colorize old pictures of families, historical figures,
              ancestors, movies, etc. Reimagine the past by coloring pictures of
              ancestors and historical figures. Restore old images with stunning
              colors. Reimagine the past by colorizing pictures of ancestors and
              historic figures.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">Photo Colorizer</h2>
            <p>
              Whether you want to colorize old family photos, classic movie
              screenshots or black and white landscapes. You can access
              high-quality colour photos in a few seconds without any learning
              curve. Try our AI colorizer now and prepare a gift for your
              family.Our AI Photo Colorizer uses AI coloring technology and deep
              learning to add consistent and natural colors to your old photos.
              you can colorize old pictures of families, historical figures,
              ancestors, movies, etc. Reimagine the past by coloring pictures of
              ancestors and historical figures. Restore old images with stunning
              colors. Reimagine the past by colorizing pictures of ancestors and
              historic figures.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              alt="img"
              src={colorizeSectionDetailImg3}
              height={483}
              width={530}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorizeImgDetailsSection;
