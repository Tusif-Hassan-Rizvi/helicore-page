import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

interface TestimonialItem {
  quote: string
  author: string
  designation: string
  avatar: string
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      '“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”',
    author: 'Carl Rowan',
    designation: 'Aglets Inc',
    avatar: '/images/review-user.png',
  },
  {
    quote:
      '“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”',
    author: 'Carl Rowan',
    designation: 'Aglets Inc',
    avatar: '/images/review-user.png',
  },
  {
    quote:
      '“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”',
    author: 'Carl Rowan',
    designation: 'Aglets Inc',
    avatar: '/images/review-user.png',
  },
  {
    quote:
      '“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”',
    author: 'Carl Rowan',
    designation: 'Aglets Inc',
    avatar: '/images/review-user.png',
  },
  {
    quote:
      '“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”',
    author: 'Carl Rowan',
    designation: 'Aglets Inc',
    avatar: '/images/review-user.png',
  },
  {
    quote:
      '“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”',
    author: 'Carl Rowan',
    designation: 'Aglets Inc',
    avatar: '/images/review-user.png',
  },
  {
    quote:
      '“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”',
    author: 'Carl Rowan',
    designation: 'Aglets Inc',
    avatar: '/images/review-user.png',
  },
  {
    quote:
      '“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”',
    author: 'Carl Rowan',
    designation: 'Aglets Inc',
    avatar: '/images/review-user.png',
  },
]

function InactiveBullet() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
    >
      <mask id="testimonial_bullet_mask" fill="white">
        <path d="M6.92822 0L10.3682 2.04175L13.8564 4L13.8082 8L13.8564 12L10.3682 13.9583L6.92822 16L3.48822 13.9583L1.95503e-05 12L0.048223 8L1.95503e-05 4L3.48822 2.04175L6.92822 0Z" />
      </mask>
      <path
        d="M6.92822 0L10.3682 2.04175L13.8564 4L13.8082 8L13.8564 12L10.3682 13.9583L6.92822 16L3.48822 13.9583L1.95503e-05 12L0.048223 8L1.95503e-05 4L3.48822 2.04175L6.92822 0Z"
        strokeWidth="2"
        stroke="#C18C2C"
        mask="url(#testimonial_bullet_mask)"
      />
    </svg>
  )
}

function ActiveBullet() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
    >
      <path
        d="M6.92822 0L10.3682 2.04175L13.8564 4L13.8082 8L13.8564 12L10.3682 13.9583L6.92822 16L3.48822 13.9583L1.95503e-05 12L0.048223 8L1.95503e-05 4L3.48822 2.04175L6.92822 0Z"
        fill="#C18C2C"
      />
    </svg>
  )
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="relative w-full overflow-hidden bg-cream-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
        <h2
          data-aos="fade-up"
          className="font-abhaya text-[32px] font-bold leading-[32px] text-[#1B1B1B] sm:text-[36px] lg:text-[40px]"
        >
          What Our Patients Are saying
        </h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="mt-10 w-full sm:mt-12 lg:mt-14"
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={24}
          breakpoints={{
            640: {
              spaceBetween: 32,
            },
            1024: {
              spaceBetween: 40,
            },
          }}
          className="w-full !overflow-visible"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-[90vw] sm:!w-[580px] md:!w-[660px] lg:!w-[718px] max-w-[718px]"
            >
              <div className="flex flex-col justify-between overflow-hidden rounded-[24px] bg-[#F7EED9]">
                <div className="px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8 lg:px-14 lg:pt-[56px] lg:pb-10">
                  <div className="mb-2 flex h-[50px] items-center sm:mb-3 sm:h-[60px] lg:mb-4 lg:h-[70px]">
                    <span className="font-abhaya text-[80px] font-bold leading-none text-[#1B1B1B] select-none sm:text-[110px] lg:text-[140px]">
                      “
                    </span>
                  </div>
                  <p className="font-work text-[18px] font-normal leading-[30px] text-[#1B1B1B] sm:text-[21px] sm:leading-[34px] lg:text-[24px] lg:leading-[38.5px]">
                    {item.quote}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3.5 bg-[#C18C2C] px-6 py-5 sm:gap-4 sm:px-10 sm:py-6 lg:px-12 lg:py-[28px]">
                  <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full border border-white">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-work text-[18px] font-semibold leading-none text-white sm:text-[20px]">
                      {item.author}
                    </span>
                    <span className="mt-1.5 font-work text-[14px] font-normal leading-none text-white sm:text-[16px]">
                      {item.designation}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 flex items-center justify-center gap-2.5 sm:mt-10 sm:gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => swiperRef.current?.slideToLoop(idx)}
              className="cursor-pointer transition-transform duration-300 hover:scale-125 focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === activeIndex ? <ActiveBullet /> : <InactiveBullet />}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
