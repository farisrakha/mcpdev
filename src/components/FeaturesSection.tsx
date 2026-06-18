export function FeaturesSection() {
  return (
    <section className="bg-[#f3eae5] w-full pb-24 lg:pb-36">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col gap-16 lg:gap-20">
        {/* Row 1: image left, text right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="w-full lg:w-[432px] shrink-0">
            <img
              src="/assets/img-thousands-insights.png"
              alt="Thousands of insights"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full lg:w-[590px]">
            <h2 className="font-mabry text-[#0e1889] text-[44px] lg:text-[56px] leading-[52px] mb-5">
              Thousands of insights, trends and ideas
            </h2>
            <p className="font-helvetica text-[#3e3c43] text-[18px] lg:text-[20px] leading-[28px]">
              Moderne collects thousands of trends, innovative ideas and advertising campaigns from all
              over the world and extracts consumer, market and inspiration insights and then selects them
              based on your goals &amp; objectives, target audience and data.
            </p>
          </div>
        </div>

        {/* Row 2: text left, image right */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="w-full lg:w-[590px]">
            <h2 className="font-mabry text-[#0e1889] text-[44px] lg:text-[56px] leading-[52px] mb-5">
              Brainstorm like never before
            </h2>
            <p className="font-helvetica text-[#3e3c43] text-[18px] lg:text-[20px] leading-[28px]">
              Keep all your team's progress in one place: import creative briefs, discuss ideas, make
              notes, collect mood boards and develop the best ideas. Moderne helps every member of the
              team so every voice is heard.
            </p>
          </div>
          <div className="w-full lg:w-[410px] shrink-0">
            <img
              src="/assets/img-brainstorm.png"
              alt="Brainstorm like never before"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
