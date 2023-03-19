import { FC, PropsWithChildren } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const Modal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Popup
      position='center center'
      closeOnDocumentClick
    >
      {children}
    </Popup>
  )
}

export default Modal
