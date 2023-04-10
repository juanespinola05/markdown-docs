'use client'

import useTimeAgo from '@/hooks/useTimeAgo'
import { FC, ReactElement } from 'react'

interface IProps {
  timestamp: Date | string
}

const DocumentTimeAgo: FC<IProps> = ({ timestamp }): ReactElement => {
  const timeAgo = useTimeAgo(timestamp ?? Date.now())
  return (
    <p className='text-slate-600 dark:text-gray-400 text-xs'>Edited {timeAgo}</p>
  )
}

export default DocumentTimeAgo
