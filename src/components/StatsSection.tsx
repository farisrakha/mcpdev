const stats = [
  { label: 'Research time, looking for inspiration', color: '#4eb26a', fill: 25 },
  { label: 'Brainstorming, collaborating with teammates', color: '#4faab4', fill: 45 },
  { label: 'Preparing assets', color: '#749fd9', fill: 28 },
]

export function StatsSection() {
  return (
    <section className="bg-[#f3eae5] w-full pb-24 lg:pb-36">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-mabry text-[#484543] text-[36px] lg:text-[43px] leading-[44px] max-w-[850px] mb-10">
          Moderne helps creative teams{' '}
          <span className="text-[#118391]">save hours or even days</span> researching and collaborate{' '}
          <span className="text-[#118391]">up to 3x faster</span>
        </h2>

        <p className="font-mabry text-[#ab9182] text-[20px] tracking-[4px] uppercase mb-6">After</p>

        <div className="flex flex-col sm:flex-row gap-8 flex-wrap">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 min-w-[200px]">
              <p className="font-helvetica font-medium text-[18px] leading-[28px]" style={{ color: s.color }}>
                {s.label}
              </p>
              <div className="bg-white h-[9px] rounded-[2px] overflow-hidden w-full max-w-[420px]">
                <div
                  className="h-full rounded-[2px] transition-all"
                  style={{ width: `${s.fill}%`, backgroundColor: s.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
