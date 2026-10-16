interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  return (
    <div className="border-b border-[#C18C2C]/20 py-6 md:py-8">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center gap-5 text-left transition-opacity duration-300 hover:opacity-80"
        aria-expanded={isOpen}
      >
        <span className="flex h-[21px] w-[21px] shrink-0 items-center justify-center">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="1"
              viewBox="0 0 21 1"
              fill="none"
              className="transition-transform duration-300"
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
              className="transition-transform duration-300"
            >
              <path
                d="M11.1148 9.7377V0H9.73771V9.7377H0V11.1148H9.73771V21H11.1148V11.1148H21V9.7377H11.1148Z"
                fill="black"
              />
            </svg>
          )}
        </span>
        <span className="font-abhaya text-[20px] font-bold leading-[100%] text-dark-grey md:text-[24px]">
          {question}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4 md:mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden pl-[41px]">
          <p className="font-work text-[16px] font-normal leading-[134%] text-black md:text-[20px] lg:text-[24px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
