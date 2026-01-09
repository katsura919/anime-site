"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const animeGrid = [
  { title: "Attack on Titan", genre: "Action", isNew: true },
  { title: "My Hero Academia", genre: "Shonen", isNew: false },
  { title: "Demon Slayer", genre: "Action", isNew: true },
  { title: "Jujutsu Kaisen", genre: "Action", isNew: true },
  { title: "One Piece", genre: "Adventure", isNew: false },
  { title: "Tokyo Ghoul", genre: "Dark Fantasy", isNew: false },
];

export function EpisodeShowcase() {
  return (
    <section className="py-12 bg-[#0A0A0A]">
      <div className="max-w-480 mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            New Releases
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {animeGrid.map((anime, index) => (
            <Card
              key={index}
              className="relative bg-[#1A1A1A] border-none overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
    