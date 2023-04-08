import { FC } from 'react'

const Logo: FC = () => {
  return (
    <img
      className='h-16 w-32 object-cover object-center'
      src='/logotipo.webp'
      alt='Markdown Docs Logo'
    />
  )
}

export default Logo
