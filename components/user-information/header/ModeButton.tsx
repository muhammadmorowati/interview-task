import { Button } from '@mui/material'
import React from 'react'
import CustomizedSwitches from './DarkModeButton'

const ModeButton = () => {
  return (
    <div className='w-[10%] border-b-4 border-teal-400 rounded-br-2xl flex'>
     
      <CustomizedSwitches />
       <img src="public\iran-flag.png" alt="iran-flag" width={45} />
    </div>
  )
}

export default ModeButton