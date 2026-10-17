import { Fragment } from 'react'
import Button from './Button'

interface StepItem {
  number: string
  title: string
  icon: string
}

const stepsData: StepItem[] = [
  {
    number: '01',
    title: 'Schedule an appointment',
    icon: '/images/schedule-appointement.svg',
  },
  {
    number: '02',
    title: 'Connect with your provider',
    icon: '/images/connect-people.svg',
  },
  {
    number: '03',
    title: 'Discuss your comprehensive assessment',
    icon: '/images/discuss.svg',
  },
  {
    number: '04',
    title: 'Receive your individualized treatment plan',
    icon: '/images/plan.svg',
  },
]

export default function FourStepsSection() {
  return (
    <section className="relative w-full bg-[#000000]">
      <div
        className="h-[6px] w-full"
        style={{
          background:
            'linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)',
        }}
      />

      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[620px] text-center">
          <h2
            data-aos="fade-up"
            className="font-abhaya text-[32px] font-bold leading-[44px] text-transparent bg-clip-text sm:text-[36px] sm:leading-[50px] lg:text-[40px] lg:leading-[60px]"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)',
            }}
          >
            Four Simple Steps To Get
            <br />
            Started
          </h2>
        </div>

        <div className="mt-12 flex justify-center sm:mt-14 lg:mt-16">
          <div className="mx-auto grid w-full max-w-[1260px] grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:gap-0">
            {stepsData.map((step, index) => (
              <Fragment key={step.number}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="flex w-[195px] shrink-0 flex-col items-center text-center"
                >
                  <div className="flex h-[50px] w-[50px] items-center justify-center">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="h-[50px] w-[50px] object-contain"
                    />
                  </div>

                  <span
                    className="mt-4 font-abhaya text-[28px] font-bold leading-[40px] text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)',
                    }}
                  >
                    {step.number}
                  </span>

                  <p className="mt-1 min-w-[195px] font-work text-[14px] font-normal leading-[20px] text-white">
                    {step.title}
                  </p>
                </div>

                {index < stepsData.length - 1 && (
                  <div className="hidden lg:flex flex-1 items-center justify-center px-2 pt-[24px] max-w-[158px]">
                    <svg
                      width="100%"
                      height="2"
                      viewBox="0 0 158 2"
                      fill="none"
                      className="w-full max-w-[158px]"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="0"
                        y1="1"
                        x2="158"
                        y2="1"
                        stroke="white"
                        strokeDasharray="2 2"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 flex justify-center sm:mt-14 lg:mt-16"
        >
          <Button
            text="Schedule a Call"
            showIcon={true}
            className="w-full max-w-[298px] sm:w-[298px] h-[58px] sm:h-[62px] font-work font-medium text-[16px]"
          />
        </div>
      </div>

      <div
        className="h-[6px] w-full"
        style={{
          background:
            'linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)',
        }}
      />
    </section>
  )
}
