import { useState } from 'react'

interface TabItem {
  title: string
  content: string
  image: string
}

const tabsData: TabItem[] = [
  {
    title: 'Convenient access',
    content:
      'We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.',
    image: '/images/why-shoud-you-choose.png',
  },
  {
    title: 'Concierge approach',
    content:
      'Direct access to your provider via phone, text, or email, with online booking and expedited appointment options to fit your busy schedule.',
    image: '/images/why-shoud-you-choose.png',
  },
  {
    title: 'High quality service',
    content:
      'Personalized care with extended appointment times and customized treatment plans tailored specifically to your unique mental health goals.',
    image: '/images/why-shoud-you-choose.png',
  },
  {
    title: 'Trusted and empathic providers',
    content:
      'Compassionate, licensed professionals dedicated to listening without judgment and building a trusting, supportive therapeutic relationship.',
    image: '/images/why-shoud-you-choose.png',
  },
]

export default function WhyChooseUsSection() {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleToggle = (index: number) => {
    setActiveTab(index)
  }

  const currentImage =
    tabsData[activeTab]?.image || '/images/why-shoud-you-choose.png'

  return (
    <section className="relative w-full bg-[#F7EED9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-[25px] sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div
            data-aos="fade-right"
            className="relative mx-auto w-full max-w-[540px] lg:col-span-6 lg:max-w-none"
          >
            <div className="relative z-10 overflow-hidden">
              <img
                key={activeTab}
                src={currentImage}
                alt="Why choose ADA Psychiatry"
                className="h-[320px] w-full object-cover transition-opacity duration-300 sm:h-[390px] lg:h-[430px]"
              />
            </div>
            <div
              className="pointer-events-none absolute top-16 left-4 -right-4 -bottom-4.5 z-0 border border-golden sm:top-20 sm:left-5 sm:-right-5 sm:-bottom-5"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col lg:col-span-6">
            <h2
              data-aos="fade-left"
              className="font-abhaya text-[32px] font-bold leading-[40px] text-black sm:text-[36px] sm:leading-[44px] lg:text-[40px] lg:leading-[47.5px]"
            >
              Why Should You Choose Ada Psychiatry?
            </h2>

            <div className="mt-8 flex flex-col sm:mt-10">
              {tabsData.map((tab, index) => {
                const isOpen = activeTab === index
                return (
                  <div
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={index * 80}
                    className="border-b border-golden py-5 sm:py-6 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="group flex w-full cursor-pointer items-center gap-4 text-left focus:outline-none"
                    >
                      <span className="flex h-[21px] w-[21px] shrink-0 items-center justify-center transition-transform duration-300">
                        {isOpen ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="1"
                            viewBox="0 0 21 1"
                            fill="none"
                          >
                            <path d="M0 0.5H21" stroke="black" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                          >
                            <path
                              d="M11.1148 9.7377V0H9.73771V9.7377H0V11.1148H9.73771V21H11.1148V11.1148H21V9.7377H11.1148Z"
                              fill="black"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="font-abhaya text-[22px] font-bold leading-none text-black sm:text-[24px]">
                        {tab.title}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100 pt-4'
                          : 'grid-rows-[0fr] opacity-0 pt-0'
                      }`}
                    >
                      <div className="overflow-hidden pl-[37px]">
                        <p className="font-work text-[16px] font-normal leading-[134%] text-black sm:text-[18px] lg:text-[20px]">
                          {tab.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
