import { loginWithGoogle } from '@/firebase/client'
import { FC, PropsWithChildren } from 'react'

type Variant = 'primary' | 'secondary'

interface IProps {
  variant?: Variant
}

const variants: Record<Variant, string> = {
  primary: 'text-darkBlue bg-white',
  secondary: 'text-white border-2 border-white'
}

const LoginButton: FC<PropsWithChildren<IProps>> = ({ variant = 'primary', children }) => {
  const variantClass = variants[variant]
  const handleLogin = (): void => {
    void loginWithGoogle()
  }

  return (
    <button onClick={handleLogin} className={`py-1 px-2 rounded-md font-bold ${variantClass}`}>
      {children}
    </button>
  )
}

export default LoginButton
