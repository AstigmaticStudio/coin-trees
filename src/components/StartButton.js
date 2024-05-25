import React from 'react'
const tg = window.Telegram.WebApp;

export default function StartButton() {

    const onClose = () => {
        tg.close();
      }

  return (
    <div className='start_button'>
        tg.expand()
        <button onClick={onClose}>Start</button>
    </div>
  )
}
