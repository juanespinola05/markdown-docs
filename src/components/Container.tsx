import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='max-w-[100vw] px-[15px] mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px] h-full'>
      {children}
    </div>
  )
}

export default Container
