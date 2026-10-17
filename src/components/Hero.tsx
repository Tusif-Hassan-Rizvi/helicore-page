import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Button from './Button'

interface SlideItem {
  title: string
  subtitle: string
  description: string
  buttonText: string
  image: string
}

const slides: SlideItem[] = [
  {
    title: 'NEED A MENTAL\nHEALTH PROVIDER?',
    subtitle: 'No Look Further',
    description:
      'Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.',
    buttonText: 'Learn More',
    image: '/images/hero-image.png',
  },
  {
    title: 'PERSONALIZED\nPSYCHIATRIC CARE',
    subtitle: 'Compassionate Guidance',
    description:
      'We combine evidence-based medicine with individualized treatment plans tailored specifically to your wellness journey.',
    buttonText: 'Learn More',
    image: '/images/hero-image.png',
  },
  {
    title: 'IN-PERSON & VIRTUAL\nAPPOINTMENTS',
    subtitle: 'Flexible Scheduling',
    description:
      'Connect with certified psychiatric professionals from the comfort of your home or at our welcoming Chandler clinic.',
    buttonText: 'Learn More',
    image: '/images/hero-image.png',
  },
  {
    title: 'COMPREHENSIVE\nEVALUATIONS',
    subtitle: 'Dedicated Specialists',
    description:
      'Thorough clinical assessments designed to identify root causes and craft targeted paths to mental recovery.',
    buttonText: 'Learn More',
    image: '/images/hero-image.png',
  },
  {
    title: 'YOUR JOURNEY TO\nWELLNESS STARTS HERE',
    subtitle: 'Trusted Care Provider',
    description:
      'Empowering adults and families with supportive therapy, medical expertise, and long-term wellness solutions.',
    buttonText: 'Learn More',
    image: '/images/hero-image.png',
  },
]

function ActiveBullet() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      className="transition-transform duration-300 hover:scale-125"
    >
      <path
        d="M6.9282 0L10.3682 2.04175L13.8564 4L13.8082 8L13.8564 12L10.3682 13.9583L6.9282 16L3.4882 13.9583L-3.33786e-06 12L0.0482001 8L-3.33786e-06 4L3.4882 2.04175L6.9282 0Z"
        fill="url(#paint0_linear_hero_bullet)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_hero_bullet"
          x1="-1.0718"
          y1="8"
          x2="14.9282"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C18C2C" />
          <stop offset="0.5052" stopColor="#FCF38A" />
          <stop offset="1" stopColor="#C18C2C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function InactiveBullet() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      className="transition-transform duration-300 hover:scale-125"
    >
      <mask id="stroke0_hero_bullet" fill="white">
        <path d="M6.92821 0L10.3682 2.04175L13.8564 4L13.8082 8L13.8564 12L10.3682 13.9583L6.92821 16L3.48821 13.9583L4.29153e-06 12L0.0482078 8L4.29153e-06 4L3.48821 2.04175L6.92821 0Z" />
      </mask>
      <path
        d="M6.92821 0L10.3682 2.04175L13.8564 4L13.8082 8L13.8564 12L10.3682 13.9583L6.92821 16L3.48821 13.9583L4.29153e-06 12L0.0482078 8L4.29153e-06 4L3.48821 2.04175L6.92821 0Z"
        strokeWidth="0.8"
        stroke="#DAA520"
        mask="url(#stroke0_hero_bullet)"
      />
    </svg>
  )
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      className="relative w-full overflow-hidden bg-black"
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        className="h-[520px] w-full sm:h-[540px] lg:h-[565px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt="Ada Psychiatry Hero"
                className="h-full w-full object-cover object-center"
              />
              <div
                className="hidden md:block absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 56.01%)',
                }}
              />
              <div
                className="md:hidden absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 100%)',
                }}
              />
            </div>

            <div className="relative z-10 flex h-full w-full flex-col justify-center px-[25px] sm:px-[40px] lg:px-[100px]">
              <div className="max-w-[560px]">
                <h1 className="font-abhaya text-[32px] font-normal uppercase leading-[38px] text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56.5px] whitespace-pre-line">
                  {slide.title}
                </h1>

                <p className="mt-3 font-abhaya text-[18px] font-normal leading-[28px] text-white/90 sm:text-[20px]">
                  {slide.subtitle}
                </p>

                <p className="mt-4 font-abhaya text-[16px] font-normal leading-[24px] text-white sm:text-[18px] sm:leading-[28px] lg:text-[20px]">
                  {slide.description}
                </p>

                <div className="mt-8">
                  <Button text={slide.buttonText} showIcon={true} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-8 left-[40px] z-20 flex items-center gap-2 lg:left-[100px]">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className="flex h-5 w-5 cursor-pointer items-center justify-center p-0"
            aria-label={`Go to slide ${idx + 1}`}
          >
            {activeIndex === idx ? <ActiveBullet /> : <InactiveBullet />}
          </button>
        ))}
      </div>
    </section>
  )
}
