import React from 'react'
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
  return (
    <Typewriter 
    options = {{
        loop: true
    }}

    onInit={(typewriter) => {
        typewriter.typeString("Hi, I'm Aidan, thanks for stopping by. I would describe myself as... <strong> reliable! </strong> ").pauseFor(5000).deleteChars((" reliable! ").length).start()
        typewriter.typeString("<strong> creative! </strong>").pauseFor(5000).deleteChars((" creative! ").length).start()
        typewriter.typeString("<strong> driven! </strong>").pauseFor(5000).deleteChars((" driven! ").length).start() 
        typewriter.typeString("<strong> a good teammate! </strong>").pauseFor(5000).start()        
    
    }}/>
  )
}

export default TypeWriter