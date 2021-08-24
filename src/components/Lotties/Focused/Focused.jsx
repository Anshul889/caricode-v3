import React from 'react'
import { Popup, Focus, Notification } from './style'

const Focused = () => {
  return (
    <Focus>
      <Popup></Popup>
      <Notification>You have a new message!</Notification>
    </Focus>
  )
}

export default Focused
