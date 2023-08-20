import React from 'react'
import './App.css'
import { SwiperContainer } from './components/SwiperContainer/SwiperContainer'

function App() {
  const items = [
    <div key={1}>hello there</div>,
    <div key={2}>general kenobi</div>
  ];
  return (
    <>
      <div>
        {/* <h1 className='bg-red-400'>Hello there!</h1> */}
        <SwiperContainer items={items} currentItem={0}/>
      </div>
    </>
  )
}

export default App
