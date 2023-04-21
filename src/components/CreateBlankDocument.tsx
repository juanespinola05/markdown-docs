import useStorage from '@/hooks/useStorage'
import { useRouter } from 'next/router'
import { FC, FormEventHandler, forwardRef, ReactElement, RefObject, useRef, useState } from 'react'
import Popup from 'reactjs-popup'
import Card from './Card'
import Spinner from './Spinner'
import Input from './Input'
import DocumentIcon from '../assets/document.svg'

const CreatorButton = forwardRef<RefObject<HTMLButtonElement>>((props, ref) => {
  return (
    <Card className='w-48 h-60 max-w-xs dark:bg-slate-700'>
      <button
        ref={ref as RefObject<HTMLButtonElement>}
        {...props}
        className='text-7xl button text-center flex items-center h-full w-full justify-center text-gray-900 dark:text-slate-200'
        aria-describedby='0'
      >
        +
      </button>
    </Card>
  )
})

const CreateBlankDocument: FC = (): ReactElement => {
  const popUpRef = useRef(null)
  const closePopup = (): void => (popUpRef.current as any).close()

  return (
    <Popup
      ref={popUpRef}
      trigger={() => <CreatorButton />}
      position='bottom left'
      closeOnDocumentClick
    >
      <CreatorForm closePopup={closePopup} />
    </Popup>
  )
}

function CreatorForm ({ closePopup }: { closePopup: any }): ReactElement {
  const { createBlankDocument } = useStorage()
  const inputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleDocumentCreation: FormEventHandler = (e): void => {
    setLoading(true)
    e.preventDefault()
    if (inputRef.current === null || inputRef.current.value.length < 1) return
    createBlankDocument(inputRef.current.value)
      .then(async docId => await push(`/compose/${docId}`))
      .catch(console.error)
  }

  return (
    <div
      className='p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-md shadow-lg'
    >
      {loading
        ? (
          <div className='w-80 h-32'>
            <Spinner />
          </div>
          )
        : (
          <form
            onSubmit={handleDocumentCreation}
            className='flex flex-col justify-between gap-2'
          >
            <p className='text-lg'>Create blank document</p>
            <Input ref={inputRef} placeholder='Project name' defaultValue='New Document'>
              <DocumentIcon className='w-5 mr-2 fill-slate-700' />
            </Input>
            <div className='flex gap-2'>
              <button
                type='submit'
                className='h-9 px-4 rounded-md inline-flex flex-shrink-0 whitespace-nowrap items-center gap-2 transition-colors duration-150 ease-in-out leading-none border-1 cursor-pointer border-gray-200/60 bg-gray-200/60 text-gray-900 hover:bg-gray-200 hover:text-gray-900'
              >Create
              </button>
              <button
                type='button'
                onClick={closePopup}
                className='close px-4 px-2text-slate-500 items-center border-[1px] rounded-md border-slate-400 text-slate-900'
              >
                Cancel
              </button>
            </div>
          </form>
          )}
    </div>
  )
}

export default CreateBlankDocument
