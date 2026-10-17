import { useState } from 'react'
import FaqItem from './FaqItem'
import Button from './Button'

interface FaqData {
  question: string
  answer: string
}

const faqList: FaqData[] = [
  {
    question: 'Is Ada psychiatry confidential?',
    answer:
      'We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.',
  },
  {
    question: 'What is the best way to schedule a appointment?',
    answer:
      'You can schedule an appointment by clicking the "Book an Appointment" button above or by contacting our office directly via phone or email.',
  },
  {
    question: 'Do you prescribe controlled substance medication?',
    answer:
      'Yes, when medically appropriate and following a comprehensive clinical evaluation, controlled substances can be prescribed according to state and federal regulations.',
  },
  {
    question: 'How long does the initial appointment take?',
    answer:
      'The initial comprehensive psychiatric evaluation typically takes between 45 to 60 minutes to ensure a thorough assessment and personalized treatment plan.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="w-full bg-cream-secondary px-[24px] py-12 sm:px-[40px] md:px-[80px] md:py-16 lg:px-[175px] lg:py-[80px]">
      <div className="mx-auto w-full max-w-[1090px]">
        <h2
          data-aos="fade-up"
          className="text-center font-abhaya text-[32px] font-bold leading-[44px] tracking-[0px] text-black md:text-[40px] md:leading-[56px]"
        >
          Frequently asked questions
        </h2>

        <div className="mt-10 md:mt-14">
          {faqList.map((faq, index) => (
            <div
              key={faq.question}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 flex justify-center md:mt-16"
        >
          <Button
            text="See all FAQ"
            showIcon={true}
            gradient="linear-gradient(90deg, #CEA341 0%, #E8D16B 49.79%, #F0DF78 100%)"
            className="h-[56px] w-[335px] max-w-full text-[16px]"
          />
        </div>
      </div>
    </section>
  )
}
