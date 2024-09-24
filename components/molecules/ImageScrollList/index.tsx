import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionSentence from "components/molecules/SectionSentence";

const LogoCarousel = ({ data }: { data: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

   const handleNext = () => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
   };

   const handlePrevious = () => {
     setCurrentIndex((prevIndex) =>
       prevIndex === 0 ? data.length - 1 : prevIndex - 1
     );
   };

  return (
    <div className="w-[400px] relative overflow-hidden">
      <PhotoProvider >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((image, index) => (
            <div key={index} className="min-w-full">
              <PhotoView src={image}>
                <Image
                  src={image}
                  width={400}
                  height={400}
                  alt={image}
                  className="w-[400px] h-[400px] rounded-lg"
                />
              </PhotoView>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-400"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-400"
        >
          <FiChevronRight size={24} />
        </button>
      </PhotoProvider>
    </div>
  );
};

export default LogoCarousel;
