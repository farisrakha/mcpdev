const cols = [
  {
    links: ['Home', 'Overview', 'Pricing', 'Contact us'],
  },
  {
    links: ['For Agencies', 'For Brands', 'For Startups'],
  },
  {
    links: ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'],
  },
  {
    links: ['Careers', 'Terms of Use', 'Privacy Policy'],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#000647] w-full mt-32 py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-8 justify-between">
          {/* Logo + copyright */}
          <div className="flex flex-col gap-14">
            <div className="relative w-[43px] h-[43px]">
              <img
                src="/assets/footer-logo-group.png"
                alt=""
                className="absolute inset-0 w-full h-full"
              />
              <img
                src="/assets/footer-logo-text.png"
                alt="Moderne"
                className="absolute inset-[19%_30%_15%_28%]"
              />
            </div>
            <p className="font-helvetica text-[#7c80ad] text-[15px] leading-[16px]">Moderne © 2020</p>
          </div>

          {/* Link columns */}
          {cols.map((col, i) => (
            <div key={i} className="flex flex-col gap-4">
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-mabry text-[#7c80ad] text-[16px] leading-[16px] hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
