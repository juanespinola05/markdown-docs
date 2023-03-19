import { FC, forwardRef, ReactElement, RefObject, useLayoutEffect, useRef } from 'react'
import Popup from 'reactjs-popup'
import Card from './Card'

const CreatorButton = forwardRef<RefObject<HTMLButtonElement>>((props, ref) => {
  return (
    <Card className='w-48 h-60 max-w-xs'>
      <button
        ref={ref as RefObject<HTMLButtonElement>}
        {...props}
        className='button text-7xl text-center flex items-center h-full w-full justify-center dark:text-yellow text-blue '
      >
        +
      </button>
    </Card>
  )
})

const CreateBlankDocument: FC = (): ReactElement => {
  // const [showModal, setShowModal] = useState(false)
  // const handleClick = (): void => {
  //   setShowModal(true)
  // }

  return (
    <>
      <Popup
        trigger={open => <CreatorButton />}
        position='bottom left'
        closeOnDocumentClick
      >
        <div className='w-80 h-36 bg-white dark:bg-blue p-4 rounded-md flex flex-col gap-2 justify-center'>
          <p className='text-lg'>Create blank document</p>
          <input
            placeholder='Your document name'
            defaultValue='New Document'
            className='rounded-md bg-white p-1 outline-none text-black w-full'
            type='text'
            minLength={1}
            maxLength={32}
          />
          <div className='flex gap-2'>
            <button
              className='rounded-md py-1 px-2 bg-green-800 text-white'
            >
              Create
            </button>
            <button
              className='rounded-md py-1 px-2 bg-red-700 text-white'
            >
              Cancel
            </button>
          </div>
        </div>
      </Popup>
    </>
  )
}

export default CreateBlankDocument
