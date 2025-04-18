import Header from "@/components/Header";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const Gallery = () => {
  return (
    <div>
      <Header title="Gallery" />
      <div className="mt-[20vh]">
        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery;
