"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import imgDownload1 from "@/public/assets/imgDownload1.png";
import imgDownload2 from "@/public/assets/imgDownload2.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import toast from "react-hot-toast";
import downloadImage from "../lib/downloadImage";

const ImgDownload = ({ action, api, propImage, previewImage }) => {
  const [processedImg, setProcessedImg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAction = async () => {
    setLoading(true);
    if (propImage.size > 1024 * 1024) {
      toast.error("Image size exceeds the maximum allowed size of 1 MB");
      return;
    }

    const form = new FormData();
    form.append("image_file", propImage);
    if (action == "Upscale Image") {
      form.append("target_width", 2048);
      form.append("target_height", 2048);
    } else if (action == "Replace Background") {
      form.append("prompt", "a gradient white background");
    }

    fetch(api, {
      method: "POST",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_CLIPDROP_API_KEY,
      },
      body: form,
    })
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        if (buffer) {
          // console.log(buffer);
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(buffer))
          );
          // console.log(base64String);
          setProcessedImg(base64String);
          toast.success("Successfully edited picture");
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong");
        console.error("Error processing image:", error);
        setLoading(false);
      });
  };

  const handleDownload = async () => {
    downloadImage(processedImg);
  };
  return (
    <section className="shadow-lg mt-32">
      <div className="shadow-lg w-full h-10" />
      <div className="py-16  wrapper">
        <div>
          <div className="flex flex-col md:flex-row gap-4 text-center py-8">
            <p className="font-bold">Original</p>
            <div className="flex flex-wrap gap-4 items-center justify-center mx-auto">
              <p>Restoration</p>
              <p className="btn !rounded-full">Quality</p>
              <p className="btn !bg-darkGray !text-black !rounded-full">
                fidelity
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-center flex-col xl:flex-row">
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="relative h-[405px] w-[396px] max-sm:h-[250px] max-sm:w-[250px] rounded-lg">
                {previewImage ? (
                  <Image
                    className="rounded-lg object-cover"
                    src={previewImage}
                    alt="image"
                    fill
                  />
                ) : (
                  <div className="w-full h-full bg-darkGray rounded-lg"></div>
                )}
              </div>
              <div className="relative h-[405px] w-[396px] max-sm:h-[250px] max-sm:w-[250px] rounded-lg">
                {processedImg ? (
                  <Image
                    className="rounded-lg object-cover"
                    src={`data:image/png;base64,${processedImg}`}
                    alt="image"
                    fill
                  />
                ) : (
                  <div className="w-full h-full bg-darkGray rounded-lg"></div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              {action && (
                <button
                  disabled={loading}
                  onClick={handleAction}
                  className={`${loading ? "!bg-gray-400" : ""} btn`}
                >
                  {loading ? "processing..." : action}
                </button>
              )}
              <button onClick={handleDownload} className="btn">
                Free Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgDownload;
