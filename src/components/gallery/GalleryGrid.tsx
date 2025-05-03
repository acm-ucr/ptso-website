import ImageCard from "@/components/gallery/ImageCard";
import GroupPic from "@/public/assets/gallery/PT.webp";

const GalleryGrid = () => {
  return (
    <div className="">
      <ImageCard
        image={GroupPic}
        alt="Group Picture"
        description="Fall ‘24 PT Demo"
      />
    </div>
  );
};
export default GalleryGrid;
