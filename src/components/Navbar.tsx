export function Navbar() {
  return (
    <nav className="bg-[#171c5d] w-full sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between py-6 gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-[43px] h-[43px] shrink-0">
            <img
              src="/assets/logo-img-group.svg"
              alt=""
              className="absolute inset-0 w-full h-full"
            />
            <img
              src="/assets/logo-text.svg"
              alt=""
              className="absolute left-[20%] top-[17%] h-[65%] w-auto"
            />
          </div>
          <img
            src="/assets/logo-path.svg"
            alt="Moderne"
            className="h-[14px] w-auto"
          />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {['Overview', 'Solutions', 'Pricing', 'Insight of the Day', 'Login'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-[19px] font-mabry whitespace-nowrap hover:text-white/80 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="shrink-0 bg-[#f6c8f1] text-[#060e60] text-[19px] font-mabry px-6 py-2 rounded-[3px] border-2 border-transparent hover:bg-[#f0b0e8] transition-colors whitespace-nowrap"
        >
          Get a Demo
        </a>
      </div>
    </nav>
  )
}
