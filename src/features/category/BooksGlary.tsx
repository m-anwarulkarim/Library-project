import { galleryData } from "@/components/data/BooksGalary";
import { InteractiveCardGallery } from "@/components/lightswind/interactive-card-gallery";

function BooksGalary() {
  return (
    <div className="w-full">
      <InteractiveCardGallery
        cards={galleryData}
        cardHeight="h-56 pb-10 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem]"
        hoverScale={1.2}
        transitionDuration={500}
      />
    </div>
  );
}

export default BooksGalary;
