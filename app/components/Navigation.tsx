"use client";

import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["HOME", "ANIME", "MANGA", "POPULAR", "NEW RELEASES"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-480 mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="text-xl font-bold text-white">
              <span className="text-[#F59E0B]">ANIME</span>
              <span className="text-white ml-1">PLACE</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-[#F59E0B] transition-colors duration-200 text-sm font-medium uppercase"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-[#1A1A1A] rounded-md px-3 py-2 gap-2">
              <Search size={16} className="text-white/60" />
              <input
                type="text"
                placeholder="Search anime..."
                className="bg-transparent border-none outline-none text-white text-sm w-48"
              />
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-white hover:text-[#F59E0B] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
