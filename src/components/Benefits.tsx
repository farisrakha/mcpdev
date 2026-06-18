const benefits = [
  {
    icon: '/assets/icon-deliver-ideas.png',
    title: 'Deliver more creative ideas.',
    body: 'Make use of all of our creative ideas, trends and consumer and market insights, highly tailored to your specific needs.',
  },
  {
    icon: '/assets/icon-brainstorm.png',
    title: 'Run creative brainstorms smoother.',
    body: 'Build a space for your creative team to share ideas and insights, as well as to organize mood boards and discussions.',
  },
  {
    icon: '/assets/icon-present-ideas.png',
    title: 'Present your ideas beautifully.',
    body: 'Turn your next advertising campaign into a beautiful collection of ideas to present to your executives or clients.',
  },
]

export function Benefits() {
  return (
    <section className="bg-[#f3eae5] w-full py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Heading */}
        <h2 className="font-mabry text-[#0e1889] text-[36px] lg:text-[43px] leading-[44px] max-w-[850px] mb-16">
          Moderne helps creative teams to{' '}
          <span className="text-[#dd59cf]">save hours or even days</span> on research and allows them
          to collaborate <span className="text-[#dd59cf]">up to 3x faster</span>
        </h2>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col gap-3">
              <div className="h-[91px] flex items-start">
                <img src={b.icon} alt="" className="h-[66px] w-auto object-contain" />
              </div>
              <p className="font-helvetica font-bold text-[#3e3c43] text-[18px] leading-[24px]">
                {b.title}
              </p>
              <p className="font-helvetica text-[#3e3c43] text-[18px] leading-[24px]">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
