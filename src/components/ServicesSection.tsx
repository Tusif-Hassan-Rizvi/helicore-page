import Button from './Button'

const services = [
  {
    icon: '/images/Psychiatric.svg',
    title: 'Psychiatric Evaluation',
  },
  {
    icon: '/images/hospital.svg',
    title: 'Medication Management',
  },
  {
    icon: '/images/mental-health.svg',
    title: 'Supportive Psychotherapy',
  },
  {
    icon: '/images/ADHD.svg',
    title: 'ADHD Screening',
  },
  {
    icon: '/images/Psychiatric.svg',
    title: 'MAT Treatment',
  },
  {
    icon: '/images/hospital.svg',
    title: 'Gene Sight Testing',
  },
]

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-cream-secondary py-14 sm:py-20 lg:py-[100px]">
      <div className="mx-auto max-w-[1240px] px-[25px] sm:px-6 lg:px-8">
        <h2
          data-aos="fade-up"
          className="text-center font-abhaya text-[32px] font-bold leading-[32px] text-[#1B1B1B] sm:text-[36px] lg:text-[40px]"
        >
          Our Services
        </h2>

        <div className="mt-[40px] grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 lg:gap-x-5">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 70}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#F7EED9] p-[26px] transition-transform duration-300 hover:scale-105">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="max-h-[46px] max-w-[46px] h-full w-full object-contain"
                />
              </div>
              <span className="mt-4 max-w-[140px] font-abhaya text-[18px] font-bold leading-[26px] text-[#1B1B1B] sm:text-[20px] sm:leading-[28px]">
                {service.title}
              </span>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-[60px] flex justify-center"
        >
          <Button
            text="View our services"
            showIcon
            className="min-w-[298px] h-[62px]"
          />
        </div>
      </div>
    </section>
  )
}
