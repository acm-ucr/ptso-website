"use client";
import { picturesData } from "@/data/GalleryImages";
import ImageCard from "@/components/gallery/ImageCard";

export default function GalleryGrid() {
  return (
    <div className="mx-auto mt-10 mb-10 flex w-11/12 flex-col items-center sm:gap-4">
      <div className="h-full w-full grid-cols-3 gap-4 sm:grid">
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
      <div className="w-full grid-cols-12 gap-4 sm:grid">
        <div className="col-span-3 grid sm:gap-4">
          <ImageCard
            image={picturesData[3].pictures}
            alt={picturesData[3].alt}
            description={picturesData[3].description}
          />
          <ImageCard
            image={picturesData[4].pictures}
            alt={picturesData[4].alt}
            description={picturesData[4].description}
          />
        </div>
        <div className="col-span-5 grid sm:gap-4">
          {picturesData
            .slice(5, 8)
            .map(({ pictures, alt, description }, index) => (
              <ImageCard
                key={index}
                image={pictures}
                alt={alt}
                description={description}
              />
            ))}
        </div>
        <div className="col-span-4 grid sm:gap-4">
          {picturesData
            .slice(8, 11)
            .map(({ pictures, alt, description }, index) => (
              <ImageCard
                key={index}
                image={pictures}
                alt={alt}
                description={description}
              />
            ))}
        </div>
      </div>

      <div className="h-full w-full grid-cols-6 gap-4 sm:grid">
        <div className="col-span-2 grid h-full w-full grid-cols-1 sm:gap-4">
          {picturesData
            .slice(11, 13)
            .map(({ pictures, alt, description }, index) => (
              <ImageCard
                key={index}
                image={pictures}
                alt={alt}
                description={description}
              />
            ))}
        </div>
        <div className="col-span-2 grid h-full w-full grid-cols-1 sm:gap-4">
          {picturesData
            .slice(13, 15)
            .map(({ pictures, alt, description }, index) => (
              <ImageCard
                key={index}
                image={pictures}
                alt={alt}
                description={description}
              />
            ))}
        </div>
        <div className="col-span-2 grid h-full w-full gap-4">
          <ImageCard
            image={picturesData[15].pictures}
            alt={picturesData[15].alt}
            description={picturesData[15].description}
          />
        </div>
      </div>
    </div>
  );
}
