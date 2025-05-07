"use client";
import { picturesData } from "@/data/GalleryImages";
import ImageCard from "@/components/gallery/ImageCard";

export default function GalleryGrid() {
  return (
    <div className="mt-10 columns-3 gap-4 px-3 sm:columns-2 md:columns-3 lg:columns-3">
      {picturesData.map(({ pictures, alt }, index) => (
        <div key={index} className="py-2">
          <ImageCard image={pictures} alt={alt} description={""} />
        </div>
      ))}
    </div>
  );
}
