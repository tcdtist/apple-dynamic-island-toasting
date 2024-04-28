import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

function getSymbolIcon(variant) {
  switch (variant) {
    case 'success':
      return (
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-300/20">
          <CheckCircleIcon className="h-6 w-6 text-green-300" />
        </span>
      )
    case 'error':
      return (
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-300/20">
          <ExclamationCircleIcon className="h-6 w-6 text-red-300" />
        </span>
      )
    case 'warning':
      return (
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-300/20">
          <ExclamationTriangleIcon className="h-6 w-6 text-yellow-300" />
        </span>
      )
    case 'info':
      return (
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-300/20">
          <InformationCircleIcon className="h-6 w-6 text-blue-300" />
        </span>
      )
    default:
      return null
  }
}

export default function Toast({
  variant = 'success',
  heading = 'Notification Header',
  isToastVisible,
  setIsToastVisible,
}) {
  setTimeout(() => {
    setIsToastVisible(false)
  }, 4900)

  return (
    <>
      {isToastVisible && (
        <div className="pill-animation fixed top-4 z-50 h-12 w-80 rounded-full bg-zinc-800 shadow-xl ring-2 ring-white/30">
          <div className="inner-animation flex h-full w-full items-center justify-between gap-4 px-2">
            <img src="/favicon.ico" alt="" className=" h-9 w-9 rounded-full" />
            <p className="font-medium text-zinc-400">{heading}</p>
            {getSymbolIcon(variant)}
          </div>
        </div>
      )}
    </>
  )
}
