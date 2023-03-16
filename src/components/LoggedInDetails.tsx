import { FC, ReactElement } from 'react'

interface IProps {
  avatar: string
  displayName: string
}

const LoggedInDetails: FC<IProps> = ({ displayName, avatar }): ReactElement => {
  return (
    <div className='flex gap-2 items-center'>
      <img
        className='h-10 w-10 rounded-full border-2 p-[1px] border-yellow'
        src={avatar}
        alt=''
      />
      <p className='text-white'>{displayName}</p>
    </div>
  )
}

export default LoggedInDetails
