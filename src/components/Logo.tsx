import { FC } from 'react'
import LogoIcon from '../assets/logotipo.svg'

interface IProps {
  className?: string
  width?: string
}

const Logo: FC<IProps> = ({ className = '', width = '100' }) => {
  return (
    <div className={className}>
      <LogoIcon width={width} height={+width / 2} />
    </div>
  )
}

export default Logo
