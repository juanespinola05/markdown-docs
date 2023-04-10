import useStorage from '@/hooks/useStorage'
import { useRouter } from 'next/router'
import { FC, FormEventHandler, forwardRef, ReactElement, RefObject, useRef, useState } from 'react'
import Popup from 'reactjs-popup'
import Card from './Card'
import Spinner from './Spinner'

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
      className='w-80 h-36 bg-white p-4 rounded-md flex flex-col justify-between'
    >
      {loading
        ? <Spinner />
        : (
          <form onSubmit={handleDocumentCreation}>
            <p className='text-lg text-slate-700  '>Create blank document</p>
            <input
              ref={inputRef}
              placeholder='Your document name'
              defaultValue='New Document'
              className='rounded-md bg-white p-1 text-black w-full border-[1px] border-slate-400 h-9'
              type='text'
              minLength={1}
              maxLength={32}
            />
            <div className='flex gap-2'>
              <button
                type='submit'
                className='p-1 px-2text-slate-500 items-center border-[1px] rounded-md border-slate-400 bg-slate-400 text-slate-900'
              >
                Create
              </button>
              <button
                type='button'
                onClick={closePopup}
                className='close p-1 px-2text-slate-500 items-center border-[1px] rounded-md border-slate-400 text-slate-900'
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
