interface StateItem {
  name: string
  image: string
  status: string
}

const statesData: StateItem[] = [
  {
    name: 'Arizona',
    image: '/images/arizona.png',
    status: 'Virtual Appointment',
  },
  {
    name: 'Washington',
    image: '/images/washington.png',
    status: 'Virtual Appointment',
  },
  {
    name: 'Oregon',
    image: '/images/oregon.png',
    status: 'Coming Soon',
  },
  {
    name: 'New Mexico',
    image: '/images/new-mexico.png',
    status: 'Virtual Appointment',
  },
  {
    name: 'Colorado',
    image: '/images/colorado.png',
    status: 'Virtual Appointment',
  },
  {
    name: 'Kansas',
    image: '/images/kansas.png',
    status: 'Virtual Appointment',
  },
]

export default function StatesSection() {
  return (
    <section className="relative w-full bg-cream-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[700px] text-center">
          <h2
            data-aos="fade-up"
            className="font-abhaya text-[32px] font-bold leading-[38px] text-[#1B1B1B] sm:text-[36px] sm:leading-[44px] lg:text-[40px] lg:leading-[48px]"
          >
            Now Accepting Patients In
            <br />
            The Following States
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 justify-items-center gap-x-[30px] gap-y-12 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-y-16">
          {statesData.map((state, index) => (
            <div
              key={state.name}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group flex w-full max-w-[320px] flex-col items-center text-center sm:max-w-[360px] lg:max-w-[400px]"
            >
              <div className="relative w-full aspect-[2/1] overflow-hidden rounded-t-full rounded-b-none bg-[#00000040]">
                <img
                  src={state.image}
                  alt={state.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), linear-gradient(180deg, rgba(35, 32, 32, 0) 0%, rgba(35, 32, 32, 0.45) 66.6%, #232020 100%)',
                  }}
                />
              </div>

              <h3 className="mt-6 font-abhaya text-[36px] font-bold leading-none text-black sm:text-[40px] lg:text-[44px]">
                {state.name}
              </h3>

              <p className="mt-1 font-work text-[16px] font-normal leading-[38.5px] text-[#1B1B1B] sm:text-[18px]">
                {state.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
