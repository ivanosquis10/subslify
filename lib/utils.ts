import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, differenceInDays } from 'date-fns'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/'
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}

export const getCurrentDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = (today.getMonth() + 1).toString().padStart(2, '0')
  const day = today.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

export const handleError = (error: unknown) => {
  console.error(error)
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export function calculateDaysRemaining (fechaInicio: string | Date, fechaFin: string | Date, count?: boolean) {
  // Convertir las fechas a objetos Date si no lo están
  const startDate = new Date(fechaInicio)
  const endDate = new Date(fechaFin)

  // Calcular la diferencia en milisegundos
  const differenceInMilliseconds = +endDate - +startDate

  // Calcular los días redondeando hacia abajo
  const daysLefts = Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000))

  if (count) {
    return daysLefts
  }

  if (daysLefts < 0) {
    return 'Expired'
  }

  return `${daysLefts} days left...`
}

export const formatDate = (date: string | Date) => {
  const newDate = new Date(date)
  return format(newDate, 'MM/dd/yyyy')
}

export const calculateDate = (startDate: string | Date, endDate: string | Date) => {
  const daysRemainign = differenceInDays(new Date(endDate), new Date(startDate))

  if (daysRemainign < 0) {
    return 'Expired'
  }

  return `${daysRemainign} days left...`
}
