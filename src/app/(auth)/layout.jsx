import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image
          src="/assets/post6.png"
          alt="background"
          fill
          className="size-full"
        />
      </div>
      {children}
    </div>
  );
}
