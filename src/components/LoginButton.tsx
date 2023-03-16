import { loginWithGoogle } from '@/firebase/client'
import { FC } from 'react'

const LoginButton: FC = () => {
  const handleLogin = (): void => {
    void loginWithGoogle()
  }

  return (
    <button onClick={handleLogin} className='py-1 px-2 text-white rounded-md bg-blue-900'>
      Log In
    </button>
  )
}

export default LoginButton
