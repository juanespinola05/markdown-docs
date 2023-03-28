import { FC, forwardRef, PropsWithChildren, ReactElement, useRef } from 'react'
import OptionsIcon from '../assets/options.svg'
import DeleteIcon from '../assets/delete.svg'
import EditIcon from '../assets/edit.svg'
import OpenIcon from '../assets/open.svg'
import Popup from 'reactjs-popup'

const OptionsButton = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} {...props} aria-describedby='0' className='rounded-full hover:bg-slate-100 p-1'>
      <OptionsIcon className='w-5 h-5 cursor-pointer' />
    </div>
  )
})

const Option: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className='flex items-center gap-2 pl-2 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none active:bg-slate-100 text-slate-500'>
      {children}
    </button>
  )
}

const DocumentCardOptions: FC = (): ReactElement => {
  const popUpRef = useRef(null)
  return (
    <Popup
      ref={popUpRef}
      trigger={() => <OptionsButton />}
      position='bottom left'
      closeOnDocumentClick
      closeOnEscape
      arrowStyle={{ display: 'none' }}
      overlayStyle={{ background: 'transparent' }}
    >
      <div className='bg-white h-36 w-60 border-[1px] border-gray-200 rounded-md shadow-md grid grid-rows-3 py-2'>
        <Option>
          <DeleteIcon className='w-6 fill-slate-500 ' />
          Remove
        </Option>
        <Option>
          <EditIcon className='w-6 fill-slate-500 ' />
          Change Name
        </Option>
        <Option>
          <OpenIcon className='w-6 fill-slate-500 ' />
          Open in new tab
        </Option>
      </div>
    </Popup>
  )
}

export default DocumentCardOptions
