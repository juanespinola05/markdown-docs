'use client'

import useTimeAgo from '@/hooks/useTimeAgo'
import { ReactElement } from 'react'

interface IProps {
  timestamp: string
}

export default function DocumentTimeAgo ({ timestamp }: IProps): ReactElement {
  const timeAgo = useTimeAgo(timestamp)

  return (
    <p className='text-slate-600 dark:text-gray-400 text-xs'>Edited {timeAgo}</p>
  )
}
