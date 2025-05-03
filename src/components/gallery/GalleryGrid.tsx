"use client";
import Image from "next/image";
import { picturesData } from "@/data/GalleryImages";

export default function GalleryGrid() {
  return (
    <div className="mt-20 columns-3 gap-4">
      {picturesData.map(({ className, pictures, alt }, index) => (
        <div key={index} className={`mb-5 rounded-lg shadow-md ${className} `}>
          <Image src={pictures} alt={alt} className="w-full object-cover" />
        </div>
      ))}
    </div>
  );
}
