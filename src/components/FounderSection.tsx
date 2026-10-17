import Button from './Button'

export default function FounderSection() {
  return (
    <section className="relative w-full border-none overflow-hidden bg-[#F7EED9] px-[25px] pt-12 pb-12 sm:px-[40px] sm:pt-16 sm:pb-16 md:pt-20 md:pb-36 lg:px-[60px] lg:pt-[90px] lg:pb-[140px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1160px] flex-col items-center lg:flex-row lg:items-center lg:justify-center">
        <div
          data-aos="fade-right"
          className="relative z-20 w-full max-w-[509px] shrink-0 overflow-hidden rounded-[20px] shadow-sm"
        >
          <img
            src="/images/meet-our-founder.png"
            alt="Lakeisha Appleton - Meet The Founder"
            className="h-auto w-full object-cover lg:h-[330px] lg:w-[509px]"
          />
        </div>

        <div
          data-aos="fade-left"
          className="relative z-10 mt-6 flex w-full max-w-[722px] flex-col justify-center rounded-[20px] border-2 border-[#DAA520] p-6 sm:p-8 lg:mt-0 lg:-ml-[102px] lg:h-[410px] lg:w-[722px] lg:shrink-0 lg:pt-[36px] lg:pb-[36px] lg:pr-[36px] lg:pl-[135px]"
        >
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-abhaya text-[30px] font-bold leading-[34px] text-black md:ml-4 sm:text-[34px] lg:text-[38px] lg:leading-[40px]"
          >
            Meet The Founder
          </h2>

          <h3
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-4 font-abhaya text-[24px] font-bold leading-tight text-black sm:mt-5 sm:text-[26px] lg:mt-6 lg:text-[28px]"
          >
            Lakeisha Appleton
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-1.5 font-work text-[18px] font-medium leading-none text-black sm:mt-2 sm:text-[20px]"
          >
            FNP-C, PMHNP- BC
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-4 w-full max-w-[490px] font-work text-[16px] font-normal leading-[24px] text-black sm:mt-5 sm:text-[18px] sm:leading-[26px] lg:mt-6 lg:text-[20px] lg:leading-[28px]"
          >
            “Mental health problems don’t define who you are. They are something
            you experience. You walk in the rain and you feel the rain, but,
            importantly, YOU ARE NOT THE RAIN.” — Matt Haig
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-5 sm:mt-6"
          >
            <Button text="Learn More" showIcon={true} />
          </div>
        </div>
      </div>

      <div className="hidden md:block pointer-events-none absolute bottom-0 left-0 z-0 w-full overflow-hidden leading-none">
        <img
          src="/images/founder-section-mask.png"
          alt=""
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  )
}
