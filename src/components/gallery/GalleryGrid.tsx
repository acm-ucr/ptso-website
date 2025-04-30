"use client";
import Image from "next/image";
import { picturesData } from "@/data/GalleryImages";

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6 lg:grid-cols-3">
      {picturesData.map(({ className, pictures, alt }, idx) => (
        <div
          key={idx}
          className={`flex aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 ${className}`}
        >
          <Image
            className="flex h-full w-full items-center justify-center object-cover"
            src={pictures}
            alt={alt}
          />
        </div>
      ))}
    </div>
  );
}
