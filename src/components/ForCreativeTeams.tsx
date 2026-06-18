const items = [
  {
    icon: '/assets/icon-built-by-creatives.png',
    title: 'Built by creative people.',
    body: 'Moderne is the product of a team of art-directors, copywriters and developers who are passionate about creativity.',
  },
  {
    icon: '/assets/icon-trusted-experts.png',
    title: "Trusted by industry's experts.",
    body: 'People in advertising agencies and in-house creative teams around the world use Moderne on a daily basis.',
  },
  {
    icon: '/assets/icon-money-back.png',
    title: 'Money-back Guarantee.',
    body: 'We are confident that your team will benefit from our creative ideas, so we offer a 100% money-back guarantee.',
  },
]

export function ForCreativeTeams() {
  return (
    <section className="bg-[#f3eae5] w-full pt-24 pb-36">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-mabry text-[36px] lg:text-[43px] leading-[44px] max-w-[755px] mb-16">
          <span className="text-[#dd59cf]">For creative teams</span>{' '}
          <span className="text-[#0e1889]">
            The all-in-one toolkit for creative troops and solo forces. Create and collaborate with ideas
            in a new and powerful way.
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <div className="h-[91px] flex items-start">
                <img src={item.icon} alt="" className="h-[66px] w-auto object-contain" />
              </div>
              <p className="font-helvetica font-bold text-[#3e3c43] text-[18px] leading-[24px]">
                {item.title}
              </p>
              <p className="font-helvetica text-[#3e3c43] text-[18px] leading-[24px]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
