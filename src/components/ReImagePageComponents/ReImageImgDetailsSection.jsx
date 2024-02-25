import Image from "next/image";
import reImageSectionDetailImg1 from "@/public/assets/reImageSectionDetailImg1.png";
import reImageSectionDetailImg2 from "@/public/assets/reImageSectionDetailImg2.png";
import reImageSectionDetailImg3 from "@/public/assets/reImageSectionDetailImg3.png";
import React from "react";

const ReImageImgDetailsSection = () => {
  return (
    <section className="border-2 border-t-primary border-b-primary border-dashed mt-36">
      <div className="wrapper py-8">
        {/* 1 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="mx-auto">
            <Image
              alt="img"
              src={reImageSectionDetailImg1}
              height={483}
              width={530}
            />
          </div>
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">Upscale images online</h2>
            <p>
              Ever taken a photo you loved, only tonotice it’s too blurry to use
              online? Our photo enhancer makesit easy to upscale and enlarge
              your images with just a few clicks. Thanks to the artificial
              intelligence-powered smart upscaler, you can put your photos to
              work without losing quality. Put your website or online store’s
              best foot forward with sharp and super-resolution images that keep
              visitors engaged for longer.Thanks to our smart upscaler,
              increasing image resolution without losing quality is easier than
              ever before. Just pick the images that you think need some
              sharpening up and upload them to our upscaling tool. Then, let
              modern technology do the work.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">
              Upscale Your Small image in 1 Minute
            </h2>
            <p>
              We all have that one picture in our old album that we love, but
              it's too small! Upscaling images today is not that hard because of
              new technologies. There are many AI photo enlargers that everyone
              can use, but it's not for free. But what if you don't have any
              premium subscription for photo editing apps installed on your
              phone? That doesn't mean you can't upsize your photos. Image
              upscaling is just the opposite of image resizing, it is the
              process of increasing resolution. Images can be upscaled with
              software, which would generate a high-resolution image with the
              same dimensions as the original.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              alt="img"
              src={reImageSectionDetailImg2}
              height={483}
              width={530}
            />
          </div>
        </div>

        {/* 3 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="mx-auto">
            <Image
              alt="img"
              src={reImageSectionDetailImg3}
              height={483}
              width={530}
            />
          </div>
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">
              Upscale a Photo for Printing & Displaying
            </h2>
            <p>
              When printing images, quality plays a major role in how sharp the
              photo looks. DPI stands for "dots per inch" and is responsible for
              a clear image. As you'd assume, the fewer dots per inch of your
              printed photo, the lower the resolution will be. On the other
              hand, the more dots per inch, the higher the resolution will be.
              To avoid grainy images, you'll need a high DPI. The best image
              quality for printing is 300 DPI and above. While 150 DPI may be
              acceptable, the higher the better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReImageImgDetailsSection;
