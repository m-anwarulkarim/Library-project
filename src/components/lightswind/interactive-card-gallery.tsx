import React, { useState, useEffect, useMemo } from "react";
import { cn } from "../lib/utils"; // 🟢 আপনার utils ফাইল থেকে ক্লাস নাম মেলানোর হেল্পার
import { ChevronLeft, ChevronRight } from "lucide-react"; // 🟢 Navigation Icons

// Types
export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink?: string;
  imageAlt?: string;
  accentColor?: string;
  onClick?: () => void;
}

// Minimal responsive columns hook (clamps to 1–5 using breakpoints)
const useResponsiveColumns = (initialColumns: number = 5) => {
  const [columns, setColumns] = useState<1 | 2 | 3 | 4 | 5>(1);

  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      let desired: 1 | 2 | 3 | 4 | 5 = 1;
      if (w >= 1280) desired = 5; // xl
      else if (w >= 1024) desired = 4; // lg
      else if (w >= 768) desired = 3; // md
      else if (w >= 640) desired = 2; // sm
      else desired = 1; // xs

      const capped = Math.min(initialColumns, desired) as 1 | 2 | 3 | 4 | 5;
      setColumns(capped);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [initialColumns]);

  return columns;
};

// Card UI
const CardItem = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
  onClick,
}: CardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (buttonLink) {
      if (!onClick) return;
      e.preventDefault();
    }
    onClick?.();
  };

  return (
    <div className="relative flex items-end overflow-hidden rounded-sm bg-gray-100 shadow-xl group h-full w-full book-card">
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="relative flex flex-col items-center text-white p-2 sm:p-3 md:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
        <h2 className="text-xs sm:text-sm md:text-base font-bold text-center line-clamp-2 leading-tight">
          {title}
        </h2>
        <p className="mt-1 italic text-xs text-center line-clamp-2 opacity-90">
          {description}
        </p>
        <button
          className="mt-2 px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm text-white font-semibold text-xs rounded border border-white/30 hover:bg-white/30 focus:outline-none transition-all duration-300"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export function InteractiveCardGallery({
  cards,
  cardHeight = "h-64",
  columns = 8,
  hoverScale = 1.1,
  transitionDuration = 700,
}: {
  cards: CardProps[];
  cardHeight?: string;
  columns?: number;
  hoverScale?: number;
  transitionDuration?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numColumns = useResponsiveColumns(columns);

  const effectiveCardHeight = useMemo(() => {
    if (numColumns === 1) return "h-80";
    if (numColumns === 2) return "h-56";
    return cardHeight;
  }, [numColumns, cardHeight]);

  const itemPaddingClass = useMemo(() => {
    return numColumns === 1 ? "px-0" : "px-1 sm:px-2";
  }, [numColumns]);

  const trackMaxWidthPx = useMemo(() => {
    if (numColumns === 1) return 420;
    if (numColumns === 2) return 520;
    return undefined;
  }, [numColumns]);

  const maxIndex = useMemo(
    () => (cards.length > numColumns ? cards.length - numColumns : 0),
    [cards.length, numColumns]
  );

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(cards.length / numColumns)),
    [cards.length, numColumns]
  );

  const currentPage = useMemo(
    () => Math.floor(currentIndex / numColumns),
    [currentIndex, numColumns]
  );

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative w-full px-2 sm:px-4 bg-white/70 dark:bg-slate-900/60">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-7">
        👶Kids👩
      </div>

      <div
        className="relative flex items-center justify-center"
        style={
          {
            "--hover-scale": hoverScale,
            "--transition-duration": `${transitionDuration}ms`,
          } as React.CSSProperties
        }
      >
        {/* Navigation Buttons */}
        {cards.length > numColumns && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:left-2 md:left-4 z-10 p-1 sm:p-2 md:p-3 bg-white/70 dark:bg-black/70 rounded-full shadow-md hover:scale-110 transition-transform backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 sm:right-2 md:right-4 z-10 p-1 sm:p-2 md:p-3 bg-white/70 dark:bg-black/70 rounded-full shadow-md hover:scale-110 transition-transform backdrop-blur-sm"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
          </>
        )}

        {/* Cards Container */}
        <div className="overflow-hidden w-full mx-4 sm:mx-8 md:mx-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / numColumns}%)`,
              width: "100%", // ✅ Fixed (আগে এখানে calculation ছিল)
              maxWidth: trackMaxWidthPx ? `${trackMaxWidthPx}px` : undefined,
              margin: trackMaxWidthPx ? "0 auto" : undefined,
            }}
          >
            {cards.map((card: CardProps, index: number) => (
              <div
                key={index}
                className={cn(
                  "group transition-transform flex justify-center",
                  itemPaddingClass,
                  effectiveCardHeight,
                  "min-w-0"
                )}
                style={{
                  flex: `0 0 ${100 / numColumns}%`,
                  maxWidth: `${100 / numColumns}%`,
                }}
              >
                <div
                  className="w-full"
                  style={{
                    maxWidth:
                      numColumns === 2
                        ? "240px"
                        : numColumns === 1
                        ? "360px"
                        : "100%",
                  }}
                >
                  <CardItem {...card} />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          {cards.length > numColumns && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <button
                  key={pageIdx}
                  aria-label={`Go to page ${pageIdx + 1}`}
                  onClick={() =>
                    setCurrentIndex(Math.min(maxIndex, pageIdx * numColumns))
                  }
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-colors",
                    pageIdx === currentPage
                      ? "bg-slate-900 dark:bg-slate-100"
                      : "bg-slate-300/80 dark:bg-slate-600/80 hover:bg-slate-400 dark:hover:bg-slate-500"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
