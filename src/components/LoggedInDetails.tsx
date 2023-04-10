import { FC, forwardRef, useRef } from 'react'
import Popup from 'reactjs-popup'
import OptionButton from './OptionButton'
import LogoutIcon from '@/assets/logout.svg'
import { useAuthUser } from 'next-firebase-auth'

interface IProps {
  avatar: string
  displayName: string
}

const Button = forwardRef<HTMLButtonElement, IProps>(({ displayName, avatar, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className='flex h-9 gap-2 items-center bg-gray-200 rounded-md px-4 border border-gray-300 dark:bg-slate-700 dark:border-slate-600'
    >
      <img
        className='h-6 w-6 rounded-full'
        src={avatar}
        alt=''
      />
      <p className='dark:text-white'>{displayName}</p>
    </button>
  )
})

const LoggedInDetails: FC<IProps> = (props) => {
  const { signOut } = useAuthUser()
  const popUpRef = useRef(null)

  const handleLogout = (): void => {
    void signOut()
  }

  return (
    <Popup
      ref={popUpRef}
      trigger={() => <Button {...props} />}
      closeOnDocumentClick
      closeOnEscape
      position='bottom right'
      arrowStyle={{ display: 'none' }}
      overlayStyle={{ background: 'transparent' }}
    >
      <div className='bg-white dark:bg-slate-700 h-12 w-48 border border-gray-200 dark:border-slate-600 rounded-md shadow-lg overflow-hidden'>
        <OptionButton onClick={handleLogout}>
          <LogoutIcon className='w-6 fill-slate-500' />
          Log out
        </OptionButton>
      </div>
    </Popup>
  )
}

export default LoggedInDetails
