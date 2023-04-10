import { FC, forwardRef, useRef } from 'react'
import OptionsIcon from '../assets/options.svg'
import DeleteIcon from '../assets/delete.svg'
import EditIcon from '../assets/edit.svg'
import OpenIcon from '../assets/open.svg'
import Popup from 'reactjs-popup'
import OptionButton from './OptionButton'

const OptionsButton = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} {...props} aria-describedby='0' className='rounded-full gray-button-hover p-1'>
      <OptionsIcon className='w-5 h-5 fill-gray-800 dark:fill-gray-200 cursor-pointer' />
    </div>
  )
})

const DocumentCardOptions: FC = () => {
  const popUpRef = useRef(null)
  return (
    <Popup
      ref={popUpRef}
      trigger={() => <OptionsButton />}
      closeOnDocumentClick
      closeOnEscape
      arrowStyle={{ display: 'none' }}
      overlayStyle={{ background: 'transparent' }}
    >
      <div className='bg-white dark:bg-gray-900 h-36 w-60 border-style border-gray-200 rounded-md shadow-md grid grid-rows-3 py-2'>
        <OptionButton>
          <DeleteIcon className='w-6 fill-slate-500' />
          Remove
        </OptionButton>
        <OptionButton>
          <EditIcon className='w-6 fill-slate-500' />
          Change Name
        </OptionButton>
        <OptionButton>
          <OpenIcon className='w-6 fill-slate-500' />
          Open in new tab
        </OptionButton>
      </div>
    </Popup>
  )
}

export default DocumentCardOptions
