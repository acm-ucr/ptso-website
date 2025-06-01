"use client";
import { picturesData } from "@/data/GalleryImages";
import ImageCard from "@/components/gallery/ImageCard";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface animationProp {
  children: ReactNode;
  index: number;
}

const Animation = ({ children, index }: animationProp) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default function GalleryGrid() {
  return (
    <div className="mx-auto mt-10 mb-10 flex w-11/12 flex-col items-center sm:gap-4">
      <div className="h-full w-full grid-cols-3 gap-4 sm:grid">
        {picturesData
          .slice(0, 3)
          .map(({ pictures, alt, description }, index) => (
            <Animation index={index} key={index}>
              <ImageCard image={pictures} alt={alt} description={description} />
            </Animation>
          ))}
      </div>
      <div className="w-full grid-cols-12 gap-4 sm:grid">
        <div className="col-span-3 grid sm:gap-4">
          <Animation index={1}>
            <ImageCard
              image={picturesData[3].pictures}
              alt={picturesData[3].alt}
              description={picturesData[3].description}
            />
          </Animation>
          <Animation index={2}>
            <ImageCard
              image={picturesData[4].pictures}
              alt={picturesData[4].alt}
              description={picturesData[4].description}
            />
          </Animation>
        </div>
        <div className="col-span-5 grid sm:gap-4">
          {picturesData
            .slice(5, 8)
            .map(({ pictures, alt, description }, index) => (
              <Animation index={index + 1} key={index}>
                <ImageCard
                  image={pictures}
                  alt={alt}
                  description={description}
                />
              </Animation>
            ))}
        </div>
        <div className="col-span-4 grid sm:gap-4">
          {picturesData
            .slice(8, 11)
            .map(({ pictures, alt, description }, index) => (
              <Animation index={index + 1} key={index}>
                <ImageCard
                  image={pictures}
                  alt={alt}
                  description={description}
                />
              </Animation>
            ))}
        </div>
      </div>

      <div className="h-full w-full grid-cols-6 gap-4 sm:grid">
        <div className="col-span-2 grid h-full w-full grid-cols-1 sm:gap-4">
          {picturesData
            .slice(11, 13)
            .map(({ pictures, alt, description }, index) => (
              <Animation index={index} key={index}>
                <ImageCard
                  image={pictures}
                  alt={alt}
                  description={description}
                />
              </Animation>
            ))}
        </div>
        <div className="col-span-2 grid h-full w-full grid-cols-1 sm:gap-4">
          {picturesData
            .slice(13, 15)
            .map(({ pictures, alt, description }, index) => (
              <Animation index={index} key={index}>
                <ImageCard
                  image={pictures}
                  alt={alt}
                  description={description}
                />
              </Animation>
            ))}
        </div>
        <div className="col-span-2 grid h-full w-full gap-4">
          <Animation index={1.5}>
            <ImageCard
              image={picturesData[15].pictures}
              alt={picturesData[15].alt}
              description={picturesData[15].description}
            />
          </Animation>
        </div>
      </div>
    </div>
  );
}
