import { useState, useEffect } from 'react'
import Button from './Button'
import NavDropdown from './NavDropdown'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-white/10">
      <div className="flex h-[80px] w-full items-center justify-between px-[25px] sm:px-[40px]">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/images/brand-logo.svg"
            alt="Ada Psychiatry Logo"
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.currentTarget
              if (target.src.includes('brand-logo.svg')) {
                target.src = '/images/brand-icon.svg'
              }
            }}
          />
          <span className="font-work text-[18px] font-semibold leading-[52px] tracking-[3px] text-white whitespace-nowrap">
            Ada Psychiatry
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8">
            <NavDropdown
              label="Who we are"
              items={['Our Story', 'Leadership', 'Our Mission']}
            />
            <NavDropdown
              label="Who we treat"
              items={['Adults', 'Children & Adolescents', 'Geriatric Care']}
            />
            <a
              href="#services"
              className="font-work text-[14px] font-medium leading-[52px] text-white transition-colors duration-300 hover:text-golden"
            >
              Services
            </a>
            <NavDropdown
              label="Resources"
              items={['Patient Portal', 'Insurance & FAQs', 'Mental Health Blog']}
            />
          </nav>

          <Button text="Book an Appointment" />
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:text-golden transition-colors duration-300 lg:hidden cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`overflow-y-auto bg-[#111111] border-b border-white/10 px-6 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'max-h-[calc(100vh-80px)] py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-3 pb-6">
          <NavDropdown
            label="Who we are"
            items={['Our Story', 'Leadership', 'Our Mission']}
            isMobile
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <NavDropdown
            label="Who we treat"
            items={['Adults', 'Children & Adolescents', 'Geriatric Care']}
            isMobile
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="border-b border-white/5 py-3 font-work text-[14px] font-medium text-white transition-colors duration-300 hover:text-golden"
          >
            Services
          </a>
          <NavDropdown
            label="Resources"
            items={['Patient Portal', 'Insurance & FAQs', 'Mental Health Blog']}
            isMobile
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <div className="pt-4">
            <Button
              text="Book an Appointment"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
