import React, { useEffect, useRef } from 'react'

const InputWithRef = () => {

    const inputRef = useRef()
    const inputRef2 = useRef()

    useEffect(()=>{
        inputRef2.current.focus()
    })

    const handleClick = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }

  return (
    <div>
    <span>Input with reference</span>
    <button onClick={handleClick}>Presionar para hacer focus</button>
    <input ref={inputRef2} placeholder="Input focused on mount"></input>
    <input ref={inputRef} placeholder="Input focused on click"></input>
    </div>
  )
}

export default InputWithRef