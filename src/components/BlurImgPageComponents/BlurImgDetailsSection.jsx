import Image from "next/image";
import blurSectionDetailImg1 from "@/public/assets/blurSectionDetailImg1.png";
import blurSectionDetailImg2 from "@/public/assets/blurSectionDetailImg2.png";
import blurSectionDetailImg3 from "@/public/assets/blurSectionDetailImg3.png";
import React from "react";

const BlurImgDetailsSection = () => {
  return (
    <section className="border-2 border-t-primary border-b-primary border-dashed mt-36">
      <div className="wrapper py-8">
        {/* 1 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">
              Blur the Lines of Reality and Imagination
            </h2>
            <p>
              The Blur Image tool turns your photographs into the ideal canvas
              for creating picture quotes and web graphics. It will remove hard
              lines,cloud the details, and blur photos to provide the perfect
              space for making your designs pop. Add text to your photos along
              with graphics and design elements to instantly create
              beautiful,professional quality images for all your business and
              personal needs.Use it to control the depth of field and direct the
              viewer's attention to the most important part of the image. Blur
              images with unparalleled ease and gobeyond the limits of viewing
              angle!With a few quick and easy clicks, you can use it to blur
              images, soften your photos and create a mysterious and seductive
              atmosphere in your photography, blurring the boundary between
              reality and imagination.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              alt="img"
              src={blurSectionDetailImg1}
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
              src={blurSectionDetailImg2}
              height={483}
              width={530}
            />
          </div>
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">Image Blur At Your Tips</h2>
            <p>
              blur effect is a creative tool to shift your composition, alter
              the feel of an image, provide a motion effect, or simply give you
              control of the focus of a picture. Use the photo blur effect to
              highlight or hide any element within the frame. By controlling
              your depth of field, you guide your viewer's focus to what matters
              most to you in your image.Every photo should draw the eye to
              something specific. Whether that’s a figure, building, message or
              some other element, blurring the extraneous details can help
              really emphasize that central focus. The go-to method for making
              something that truly pops out in photography requires adjusting
              the aperture settings on cameras.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">
              Make Awesome Backgrounds for Images
            </h2>
            <p>
              You can blur an image in Img Ai so easily, you will wonder why you
              never did it before. From now on, the stylish background blur will
              become the signature thing of your pins, articles and seasonal
              campaigns. Blur photo background for your next advertisinglayout
              and see how it makes key visual pop up in the most elegant
              way.When you blur background in photo editor, online materials
              that you create look better and work better. There are strategic
              things you can do with a blur picture editor, like reducing the
              mess around your CTAs and touch points to improve user experience.
              Blur background image on your designs today to see the potential.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              alt="img"
              src={blurSectionDetailImg3}
              height={483}
              width={530}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlurImgDetailsSection;
