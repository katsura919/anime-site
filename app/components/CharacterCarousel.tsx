"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const animeList = [
  {
    title: "Attack on Titan",
    genre: "Action",
    isNew: true,
  },
  {
    title: "My Hero Academia",
    genre: "Shonen",
    isNew: false,
  },
  {
    title: "Demon Slayer",
    genre: "Action",
    isNew: true,
  },
  {
    title: "Jujutsu Kaisen",
    genre: "Action",
    isNew: true,
  },
  {
    title: "One Piece",
    genre: "Adventure",
    isNew: false,
  },
  {
    title: "Tokyo Ghoul",
    genre: "Dark Fantasy",
    isNew: false,
  },
];

export function CharacterCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 bg-[#0A0A0A]">
      <div className="max-w-480 mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Popular Anime
          </h2>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3">
              {animeList.map((anime, index) => (
                <div key={index} className="flex-[0_0_200px] min-w-0">
                  <Card className="relative bg-[#1A1A1A] border-none overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    {/* NEW Badge */}
                    {anime.isNew && (
                      <Badge className="absolute top-2 right-2 bg-linear-to-r from-[#F59E0B] to-[#FCD34D] text-black font-bold z-10 text-xs px-2 py-1">
                        NEW
                      </Badge>
                    )}

                    {/* Poster Placeholder */}
                    <div className="w-full aspect-2/3 bg-[#2A2A2A]" />

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-3">
                      <h3 className="text-white text-sm font-semibold line-clamp-1">
                        {anime.title}
                      </h3>
                      <p className="text-white/60 text-xs">{anime.genre}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            size="icon"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-[#F59E0B] hover:bg-[#FCD34D] text-black rounded-md disabled:opacity-30 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            size="icon"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-[#F59E0B] hover:bg-[#FCD34D] text-black rounded-md disabled:opacity-30 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
