export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="w-full px-[40px] lg:px-[100px] pt-[60px] pb-[80px]">
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1.1fr_1fr_1.4fr_1.9fr] lg:gap-8 xl:gap-12">
          <div>
            <h4 className="mb-4 font-abhaya text-[18px] font-bold leading-[30px] tracking-[0.2px] text-golden">
              Quick Links
            </h4>
            <ul className="space-y-3 font-work text-[14px] leading-[141%] text-white">
              <li>
                <a
                  href="#who-we-are"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  Who We Are
                </a>
              </li>
              <li>
                <a
                  href="#what-we-treat"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  What We Treat
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-abhaya text-[18px] font-bold leading-[30px] tracking-[0.2px] text-golden">
              Resources
            </h4>
            <ul className="space-y-3 font-work text-[14px] leading-[141%] text-white">
              <li>
                <a
                  href="#faqs"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#fees-insurance"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  Fees and Insurance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-abhaya text-[18px] font-bold leading-[30px] tracking-[0.2px] text-golden">
              Legal
            </h4>
            <ul className="space-y-3 font-work text-[14px] leading-[141%] text-white">
              <li>
                <a
                  href="#terms"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#return-policy"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#cookie-settings"
                  className="transition-colors duration-300 hover:text-golden"
                >
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h4 className="mb-4 font-abhaya text-[18px] font-bold leading-[30px] tracking-[0.2px] text-golden">
                Business Hours
              </h4>
              <p className="font-work text-[14px] leading-[141%] text-white">
                Monday - Thursday
              </p>
              <p className="mt-1 font-work text-[14px] leading-[141%] text-white">
                09:00 am - 4:00 pm
              </p>
            </div>

            <div className="mt-8 lg:mt-0">
              <h4 className="mb-4 font-abhaya text-[18px] font-bold leading-[30px] tracking-[0.2px] text-golden">
                For Careers
              </h4>
              <p className="font-work text-[14px] leading-[141%] text-white">
                Interested in joining the ADA Team?
              </p>
              <a
                href="mailto:Career@adapsychiatry.com"
                className="mt-1 block font-work text-[14px] leading-[141%] text-white transition-colors duration-300 hover:text-golden"
              >
                Career@adapsychiatry.com
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/brand-logo.svg"
                  alt="Ada Psychiatry Logo"
                  className="h-10 w-10 object-contain"
                  onError={(e) => {
                    const target = e.currentTarget
                    if (target.src.includes('brand-logo.svg')) {
                      target.src = '/images/brand-icon.svg'
                    }
                  }}
                />
                <span className="font-montserrat text-[18px] font-bold leading-[52px] tracking-[3px] uppercase text-white whitespace-nowrap">
                  ADA PSYCHIATRY
                </span>
              </div>

              <div className="mt-6">
                <h4 className="mb-2 font-abhaya text-[18px] font-bold leading-[30px] tracking-[0.2px] text-golden">
                  Locate us
                </h4>
                <p className="w-[350px] max-w-full font-work text-[14px] leading-[141%] text-white">
                  1820 E Ray Road, STE A107, Chandler, Arizona 85225
                </p>
                <p className="mt-1 font-work text-[14px] leading-[141%] text-white">
                  Phone:{' '}
                  <a
                    href="tel:480-526-9292"
                    className="transition-colors duration-300 hover:text-golden"
                  >
                    480-526-9292
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-7">
              <h4 className="mb-3 font-abhaya text-[18px] font-bold leading-[30px] tracking-[0.2px] text-golden">
                Follow us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <img
                    src="/images/insta.svg"
                    alt="Instagram"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <img
                    src="/images/facebook.svg"
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <img
                    src="/images/twitter.svg"
                    alt="Twitter"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                  aria-label="TikTok"
                >
                  <img
                    src="/images/tic-tok.svg"
                    alt="TikTok"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <img
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/20">
        <p className="py-4 text-center font-work text-[12px] font-normal leading-[30px] tracking-[0.2px] text-white">
          &copy; Ada Psychiatry. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
