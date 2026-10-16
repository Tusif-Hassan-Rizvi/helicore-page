import { useState, useRef, useEffect } from 'react'

interface NavDropdownProps {
  label: string
  items: string[]
  isMobile?: boolean
  onItemClick?: () => void
}

export default function NavDropdown({
  label,
  items,
  isMobile = false,
  onItemClick,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (!isMobile) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobile])

  if (isMobile) {
    return (
      <div className="w-full border-b border-white/5 py-2">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between py-2 font-work text-[14px] font-medium text-white transition-colors duration-300 hover:text-golden cursor-pointer"
        >
          <span>{label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <path
              d="M10.6 0.599998L5.59998 5.6L0.599975 0.599999"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="white"
            />
          </svg>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pl-4">
            {items.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={onItemClick}
                className="py-1 font-work text-[13px] text-gray-300 transition-colors duration-300 hover:text-golden"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 font-work text-[14px] font-medium leading-[52px] text-white transition-colors duration-300 hover:text-golden cursor-pointer"
      >
        <span>{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <path
            d="M10.6 0.599998L5.59998 5.6L0.599975 0.599999"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="white"
          />
        </svg>
      </button>

      <div
        className={`absolute left-0 top-full min-w-[200px] rounded-lg border border-white/10 bg-[#1B1B1B] py-2 shadow-2xl transition-all duration-300 z-50 ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        {items.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 font-work text-[13px] text-gray-200 transition-colors duration-300 hover:text-golden"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}
