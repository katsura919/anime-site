"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-150 md:h-175 w-full overflow-hidden mt-16">
      {/* Background Placeholder */}
      <div className="absolute inset-0 bg-[#1A1A1A]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-end pb-16 md:pb-24">
        <div className="max-w-480 mx-auto px-4 md:px-8 lg:px-16 w-full">
          <div className="max-w-2xl">
            {/* Badges */}
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-linear-to-r from-[#F59E0B] to-[#FCD34D] text-black text-xs font-bold uppercase px-2 py-1">
                NEW
              </Badge>
              <Badge
                variant="outline"
                className="border-white/30 text-white text-xs px-2 py-1"
              >
                ACTION
              </Badge>
              <Badge
                variant="outline"
                className="border-white/30 text-white text-xs px-2 py-1"
              >
                26 EPISODES
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Featured Anime
            </h1>

            {/* Description */}
            <p className="text-white/80 text-sm md:text-base max-w-xl mb-6 leading-relaxed">
              Discover the most epic anime series and movies. Stream thousands
              of episodes and exclusive content. Your next adventure awaits in
              the world of anime.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#F59E0B] hover:bg-[#FCD34D] text-black font-semibold px-6 py-3 rounded-md transition-colors duration-200">
                <Play className="mr-2" size={18} fill="black" />
                WATCH NOW
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-md transition-colors duration-200"
              >
                <Info className="mr-2" size={18} />
                MORE INFO
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators (optional) */}
      <div className="absolute bottom-4 right-4 md:right-8 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
      </div>
    </section>
  );
}
