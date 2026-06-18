export function Hero() {
  return (
    <section className="bg-[#171c5d] w-full min-h-[785px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 py-16 lg:py-24 relative">
        {/* Text content */}
        <div className="relative z-10 max-w-[674px]">
          <h1 className="text-white font-mabry text-[56px] lg:text-[83px] leading-[1.0] font-normal mb-6">
            Unleash the full potential of your creative team
          </h1>
          <p className="text-[#6c72ae] font-helvetica text-[20px] lg:text-[24px] leading-[33px] max-w-[568px] mb-8">
            Moderne provides highly tailored ad ideas and insights, offering a digital workspace for more
            effective brainstorming for creative minds
          </p>
          <a
            href="#"
            className="inline-block bg-[#ff7e85] text-white font-mabry font-medium text-[24px] lg:text-[27px] px-14 py-3 rounded-[3px] hover:bg-[#ff6870] transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Hero image */}
        <div className="hidden lg:block absolute right-0 top-[-57px] w-[599px] h-[637px]">
          <img
            src="/assets/hero-container.png"
            alt="Moderne platform preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
