const inputTags = ['Campaign Objectives', 'Target Audience', 'Marketing Data', 'Channels']
const outputCards = [
  {
    title: 'Ideas, Cases, References',
    body: 'Get the best examples of advertising ideas in minutes to boost your creativity.',
    color: '#40ac76',
  },
  {
    title: 'Insights, Trends, Innovations',
    body: 'Use tons of highly tailored creative insights to produce mind-blowing marketing ideas.',
    color: '#33abb9',
  },
]

export function WorkflowSection() {
  return (
    <section className="bg-[#f3eae5] w-full pt-32 pb-0">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left: input tags */}
          <div className="flex flex-col gap-6">
            {inputTags.map((tag, i) => (
              <div
                key={tag}
                style={{ marginLeft: i === 1 ? 90 : i === 2 ? 30 : i === 3 ? 127 : 0 }}
              >
                <div className="border-2 border-white rounded-[4px] px-5 py-3 bg-transparent inline-block">
                  <span className="font-helvetica font-medium text-[#7a7780] text-[22px] whitespace-nowrap">
                    {tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center: magic illustration */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <img
              src="/assets/img-magic.png"
              alt="Where the magic happens"
              className="w-[327px] h-auto object-contain"
            />
            <p className="font-helvetica font-medium text-[#7a7780] text-[22px] text-center">
              Where the magic happens
            </p>
          </div>

          {/* Right: output cards */}
          <div className="flex flex-col gap-6">
            {outputCards.map((card, i) => (
              <div
                key={card.title}
                style={{ marginLeft: i === 1 ? 25 : 0 }}
              >
                <div
                  className="border-2 rounded-[4px] p-6 max-w-[373px]"
                  style={{ borderColor: card.color }}
                >
                  <p
                    className="font-helvetica font-medium text-[22px] mb-1 whitespace-nowrap"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </p>
                  <p className="font-helvetica font-medium text-[#7a7780] text-[22px] leading-[26px] max-w-[324px]">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
