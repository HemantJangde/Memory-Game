import React from 'react'
import RegularButton from './RegularButton'

export default function Form({handleSubmit}) {
  return (
    
    <form className='wrapper'>

        <RegularButton className='Start-btn' handleClick={handleSubmit}>

            Start Game 
        </RegularButton>
    </form>
  )
}
