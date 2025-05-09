"use client";
import { picturesData } from "@/data/GalleryImages";
import ImageCard from "@/components/gallery/ImageCard";

export default function GalleryGrid() {
  return (
    <div className="mx-auto mt-10 flex w-11/12 flex-col items-center gap-4">
      <div className="grid h-full w-full grid-cols-3 gap-4">
        {picturesData
          .slice(0, 3)
          .map(({ pictures, alt, description }, index) => (
            <ImageCard
              key={index}
              image={pictures}
              alt={alt}
              description={description}
            />
          ))}
      </div>
      <div className="grid h-full w-full grid-cols-3 gap-4">
        {picturesData
          .slice(3, 10)
          .map(({ pictures, alt, description }, index) => (
            <ImageCard
              key={index}
              image={pictures}
              alt={alt}
              description={description}
            />
          ))}
      </div>
      <div className="grid h-full w-full grid-cols-3 gap-4">
        {picturesData.slice(10).map(({ pictures, alt, description }, index) => (
          <ImageCard
            key={index}
            image={pictures}
            alt={alt}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
