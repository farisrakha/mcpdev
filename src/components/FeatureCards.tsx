const cards = [
  {
    tag: 'Creativity',
    tagBg: '#fdd7f5',
    tagColor: '#b358be',
    img: '/assets/img-encourage-creativity.png',
    titleColor: '#cc68d8',
    title: 'Encourage creativity.',
    body: "Spice up your team's potential with best insights and ideas.",
  },
  {
    tag: 'Collaboration',
    tagBg: '#fdd5c3',
    tagColor: '#be7558',
    img: '/assets/img-improve-collaboration.png',
    titleColor: '#fd804e',
    title: 'Improve Collaboration.',
    body: 'Great ideas could come from anyone. Make sure everyone is heard.',
  },
  {
    tag: 'Brainstorms',
    tagBg: '#bdedd5',
    tagColor: '#3d9f6e',
    img: '/assets/img-present-better.png',
    titleColor: '#40ac76',
    title: 'Present better.',
    body: 'Turn your great ideas into clean and beautiful presentations.',
  },
]

export function FeatureCards() {
  return (
    <section className="bg-[#f3eae5] w-full pt-32 pb-0">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div key={card.title} className="bg-white rounded-[4px] flex flex-col items-center pt-7 px-7 pb-6">
              {/* Tag */}
              <div className="w-full mb-2">
                <span
                  className="inline-block rounded-[3px] px-3 py-1 text-[14px] font-helvetica"
                  style={{ backgroundColor: card.tagBg, color: card.tagColor }}
                >
                  {card.tag}
                </span>
              </div>
              {/* Illustration */}
              <div className="py-8 flex items-center justify-center flex-1">
                <img src={card.img} alt={card.title} className="h-[241px] w-auto object-contain" />
              </div>
              {/* Text */}
              <p className="font-helvetica font-medium text-[26px] leading-[31px] w-[294px]">
                <span style={{ color: card.titleColor }}>{card.title}</span>{' '}
                <span className="text-[#7a7780]">{card.body}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
