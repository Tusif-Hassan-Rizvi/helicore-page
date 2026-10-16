import type { ReactNode } from 'react'

interface ButtonProps {
  text: string
  showIcon?: boolean
  icon?: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  gradient?: string
}

export default function Button({
  text,
  showIcon = false,
  icon,
  onClick,
  type = 'button',
  className = '',
  gradient,
}: ButtonProps) {
  const defaultArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M0 6.48315H14.0254" strokeWidth="1.38889" stroke="black" />
      <path
        d="M6.86328 0.0944824C6.86328 0.0944824 7.7227 6.47156 14.5079 6.47156"
        strokeWidth="1.38889"
        stroke="black"
      />
      <path
        d="M6.86328 12.872C6.86328 12.872 7.7227 6.49487 14.5079 6.49487"
        strokeWidth="1.38889"
        stroke="black"
      />
    </svg>
  )

  return (
    <button
      type={type}
      onClick={onClick}
      style={gradient ? { background: gradient } : undefined}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-2.5 font-work font-medium text-[16px] leading-[27px] text-black ${gradient ? '' : 'bg-gold-gradient'} transition-opacity duration-300 hover:opacity-90 active:opacity-80 cursor-pointer ${className}`}
    >
      <span>{text}</span>
      {showIcon && (icon || defaultArrow)}
    </button>
  )
}
