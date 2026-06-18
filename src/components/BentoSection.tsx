export function BentoSection() {
  return (
    <section className="bg-[#f3eae5] w-full pb-0">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[552px]">
          {/* Left card — orange, collaborate */}
          <div className="relative bg-[#ffb283] rounded-[15px] flex-1 min-h-[400px] lg:min-h-0 p-[35px] pb-0 overflow-hidden">
            <h2 className="font-mabry text-[#206871] text-[44px] lg:text-[52px] leading-[55px] max-w-[606px] mb-0">
              Collaborate on great ideas with your team.
            </h2>
            <img
              src="/assets/img-collaborate.png"
              alt="Collaborate on great ideas"
              className="absolute bottom-0 left-4 w-[90%] lg:w-[645px] max-w-full object-contain"
            />
          </div>

          {/* Right card — teal, quote */}
          <div className="relative bg-[#206871] rounded-[15px] w-full lg:w-[444px] shrink-0 p-8 lg:p-[38px] overflow-hidden flex flex-col justify-end min-h-[300px] lg:min-h-0">
            <img
              src="/assets/img-big-ideas.png"
              alt=""
              className="absolute top-[6px] left-[6px] w-full h-auto opacity-80 object-cover"
            />
            <p className="relative z-10 font-helvetica text-white text-[22px] lg:text-[26px] leading-[33px] max-w-[374px]">
              "Big ideas come from the unconscious. But your unconscious has to be well informed, or your
              idea will be irrelevant. Stuff your conscious mind with information, then unhook your
              rational thought process".
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
