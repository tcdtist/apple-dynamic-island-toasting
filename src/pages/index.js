import Toast from '@/components/Toast'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const ToastButton = ({ variant, heading, isToastVisible, setToast, disabled }) => {
  const handleClick = () => {
    if (!isToastVisible) {
      setToast(true, variant, heading)
    }
  }

  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-full px-6 py-2 text-${variant}-600 ring-2 ring-${variant}-600/30 bg-${variant}-300/20 transition-all duration-300 hover:bg-${variant}-300 hover:text-black active:scale-95 disabled:cursor-not-allowed disabled:saturate-0`}
      onClick={handleClick}
      disabled={disabled}
    >
      Show {heading} Toast
    </button>
  )
}

const GitHubFooter = () => (
  <div className="absolute bottom-4 flex flex-col items-center">
    <p className="flex">
      Fork on&nbsp;
      <a
        href="https://github.com/tcdtist/apple-dynamic-island-toasting"
        className="flex items-center justify-center text-blue-500 underline underline-offset-2"
      >
        GitHub
        <ArrowTopRightOnSquareIcon className="ml-1 inline-block h-5 w-5" />
      </a>
    </p>
    <p className="mt-2 text-sm opacity-75">{`</> with 💛 by tcdtist`}</p>
  </div>
)

export default function Index() {
  const [isToastVisible, setIsToastVisible] = useState(false)
  const [toastVariant, setToastVariant] = useState('success')
  const [toastHeading, setToastHeading] = useState('Notification Header')

  const setToast = (isVisible, variant, heading) => {
    setIsToastVisible(isVisible)
    setToastVariant(variant)
    setToastHeading(heading)
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {isToastVisible ? (
        <Toast
          variant={toastVariant}
          heading={toastHeading}
          isToastVisible={isToastVisible}
          setIsToastVisible={setIsToastVisible}
        />
      ) : null}
      <div className="flex flex-col gap-4">
        {['success', 'info', 'warning', 'error'].map((variant) => (
          <ToastButton
            key={variant}
            variant={variant}
            heading={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Heading`}
            isToastVisible={isToastVisible}
            setToast={setToast}
            disabled={isToastVisible}
          />
        ))}
      </div>
      <GitHubFooter />
    </main>
  )
}
