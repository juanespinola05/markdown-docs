import { FC } from 'react'

interface IProps {
  handleLogin: () => void
}

const LoginButton: FC<IProps> = ({ handleLogin }) => {
  return (
    <button onClick={handleLogin} className='py-1 px-2 text-white rounded-md bg-blue-900'>
      Log In
    </button>
  )
}

export default LoginButton
