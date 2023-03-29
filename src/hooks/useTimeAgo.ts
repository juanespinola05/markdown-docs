import { useEffect, useState } from 'react'

type DateUnit = 'day' | 'hour' | 'minute' | 'second'

const DATE_UNITS: Array<[DateUnit, number]> = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

interface TimeAgoParams {
  value: number
  unit: 'day' | 'hour' | 'minute' | 'second'
}

const getDateDiffs = (timestamp: number): TimeAgoParams => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit)

      return { value, unit }
    }
  }
  return { value: 1, unit: 'second' }
}

export default function useTimeAgo (date: Date | string): string {
  const timestamp = new Date(date).getTime()
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp))

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp)
      setTimeago(newTimeAgo)
    }, 5000)

    return () => clearInterval(interval)
  }, [timestamp])

  const rtf = new Intl.RelativeTimeFormat('en', { style: 'short' })

  const { value, unit } = timeago

  return rtf.format(value, unit)
}
