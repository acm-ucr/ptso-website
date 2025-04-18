import Header from "@/components/Header";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const Gallery = () => {
  return (
    <div>
      <Header title="Gallery" />
      <div className="mt-36">
        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery;
