"use client";

import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import downloadImage from "../lib/downloadImage";

const ImgDownload = ({ action, api, propImage, previewImage }) => {
  const [processedImg, setProcessedImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  // const handleAction = async () => {
  //   setLoading(true);

  //   if (!propImage) {
  //     toast.error("No image selected");
  //     setLoading(false);
  //     return;
  //   }

  //   if (propImage.size > 1024 * 1024) {
  //     toast.error("Image size exceeds 1 MB limit");
  //     setLoading(false);
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("image", propImage);

  //   try {
  //     const response = await fetch(
  //       "https://app.imggen.ai/v1/remove-background",
  //       {
  //         method: "POST",
  //         headers: {
  //           "X-IMGGEN-KEY": process.env.NEXT_PUBLIC_X_IMGGEN_KEY, // ✅ Replace with your key
  //         },
  //         body: formData,
  //       }
  //     );

  //     const result = await response.json();
  //     console.log(result);

  //     // if (result?.image_url) {
  //     //   setProcessedImg(result.image_url); // 👈 Direct image URL
  //     //   toast.success("Image processed successfully");
  //     // } else {
  //     //   toast.error("Failed to process image");
  //     //   console.error(result);
  //     // }
  //   } catch (error) {
  //     toast.error("Something went wrong");
  //     console.error("API error:", error);
  //   }

  //   setLoading(false);
  // };

  const handleAction = async () => {
    setLoading(true);

    if (!propImage) {
      toast.error("No image selected");
      setLoading(false);
      return;
    }

    if (propImage.size > 1024 * 1024) {
      toast.error("Image size exceeds 1 MB limit");
      setLoading(false);
      return;
    }

    const form = new FormData();
    form.append("image_file", propImage);
    if (action == "Upscale Image") {
      form.append("target_width", 2048);
      form.append("target_height", 2048);
    } else if (action == "Replace Background") {
      form.append("prompt", prompt);
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
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(buffer))
          );
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
          <div>
            {action === "Replace Background" && (
              <>
                <p className="mb-2 text-sm font-semibold text-gray-600">
                  Describe your Background Replacing idea
                </p>
                <textarea
                  rows={6}
                  // cols={60}
                  className="p-4 w-full lg:w-1/2  mb-6 border-2 border-gray-400 rounded-lg"
                  type="text"
                  placeholder="Enter a background replacing prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </>
            )}
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
                    // src={processedImg}
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
