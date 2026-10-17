import Button from './Button'

interface TreatmentItem {
  id: string
  title: string
  paragraph: string
  image: string
  isReversed?: boolean
}

const treatmentItems: TreatmentItem[] = [
  {
    id: 'mental-health',
    title: 'Mental health',
    paragraph:
      'Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.',
    image: '/images/testimonial-1.png',
    isReversed: false,
  },
  {
    id: 'addiction-recovery',
    title: 'Addiction and recovery',
    paragraph:
      'Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.',
    image: '/images/testimonial-2.png',
    isReversed: true,
  },
  {
    id: 'weight-loss',
    title: 'Supervised Medical Weight Loss',
    paragraph:
      "The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client's needs.",
    image: '/images/testimonial-3.png',
    isReversed: false,
  },
]

export default function TreatmentFocusSection() {
  return (
    <section className="w-full bg-cream-secondary px-[24px] py-12 sm:px-[40px] md:py-16 lg:px-[80px] lg:py-[80px]">
      <div className="mx-auto w-full max-w-[1080px]">
        <h2
          data-aos="fade-up"
          className="text-center font-abhaya text-[30px] font-bold leading-[44px] text-black sm:text-[37.5px] sm:leading-[56.25px]"
        >
          Our Treatment Focus
        </h2>

        <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-16 lg:mt-20 lg:space-y-[130px]">
          {treatmentItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-between gap-8 lg:gap-[60px] ${
                item.isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div
                data-aos={item.isReversed ? 'fade-left' : 'fade-right'}
                className={`relative shrink-0 ${
                  item.isReversed ? 'lg:mr-10 xl:mr-12' : 'lg:ml-10 xl:ml-12'
                }`}
              >
                <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded-full border-[2.25px] border-[#C18C2C] pointer-events-none" />
                <div className="relative z-10 h-[280px] w-[280px] overflow-hidden rounded-full shadow-sm sm:h-[360px] sm:w-[360px] lg:h-[422px] lg:w-[422px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div
                data-aos={item.isReversed ? 'fade-right' : 'fade-left'}
                className="w-full max-w-[540px] text-left"
              >
                <h3
                  data-aos="fade-up"
                  className="font-abhaya text-[26px] font-bold leading-[30px] text-black sm:text-[33.75px] sm:leading-[32.81px]"
                >
                  {item.title}
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="mt-[24px] font-abhaya text-[17px] font-normal leading-[28px] text-black sm:text-[18.75px] sm:leading-[33.75px]"
                >
                  {item.paragraph}
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="mt-[36px]"
                >
                  <Button
                    text="Learn More"
                    className="min-w-[180px] h-[52.5px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
