import { useState } from 'react'

export function CTASection() {
  const [email, setEmail] = useState('')

  return (
    <section className="bg-[#f3eae5] w-full pb-0">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="relative bg-[#ffd02d] rounded-[4px] overflow-hidden px-12 py-14 min-h-[459px]">
          {/* Headline */}
          <h2 className="font-mabry font-medium text-[#ff7399] text-[52px] lg:text-[69px] leading-[64px] max-w-[640px] lg:max-w-[780px] mb-16">
            We prepare the path to support your creative journey
          </h2>

          {/* Form */}
          <div className="relative z-10">
            <p className="font-helvetica font-medium text-white text-[22px] lg:text-[24px] mb-5">
              Enter your email address to get access to Moderne
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-[705px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 bg-[rgba(62,60,67,0.2)] text-[#000647] placeholder-[#000647]/60 font-helvetica text-[20px] lg:text-[22px] px-5 py-4 rounded-[4px] outline-none border-2 border-transparent focus:border-[#000647]/30"
              />
              <button
                type="button"
                className="bg-white text-[#ff7399] font-helvetica text-[20px] lg:text-[24px] px-8 py-4 rounded-[4px] shrink-0 hover:bg-[#fff0f5] transition-colors"
              >
                Get a Demo
              </button>
            </div>
          </div>

          {/* Decorative image */}
          <img
            src="/assets/img-cta.png"
            alt=""
            className="absolute right-8 bottom-0 w-[360px] lg:w-[431px] h-auto object-contain pointer-events-none hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}
