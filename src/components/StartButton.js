import React from 'react'
const tg = window.Telegram.WebApp;

export default function StartButton() {

    const onClose = () => {
        tg.expand()
      }

  return (
    <div className='start_button'>
        <button onClick={onClose}>Start</button>
    </div>
  )
}
