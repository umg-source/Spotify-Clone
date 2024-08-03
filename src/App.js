import React, { useContext, useState } from 'react'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import "@fontsource/inter";
import Player from './components/Player';
import { PlayerContext } from './context/PlayerContext';


const App = () => {

  const {list,cover,track,setCover,setTrack} = useContext(PlayerContext)

  setCover(track.cover)
  return (
    
    <div 
    style={{background: `linear-gradient(to right,${cover} 10%, #000000 70%)`
    }}
     className='h-screen list  p-5 from-black'
    >
      <div className='h-[100%] flex'>
        <Logo />
        <Sidebar />
        <Player />
      </div>
    </div>
  )
}

export default App