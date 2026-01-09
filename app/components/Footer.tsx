export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-12 mt-12">
      <div className="max-w-480 mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-[#F59E0B]">ANIME</span>
              <span className="text-white ml-1">PLACE</span>
            </h3>
            <p className="text-white/60 text-sm">
              © 2026 Anime Streaming Platform. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/60 hover:text-[#F59E0B] transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#F59E0B] transition-colors text-sm"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#F59E0B] transition-colors text-sm"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#F59E0B] transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
