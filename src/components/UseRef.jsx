import React, { useRef, useState, useEffect } from 'react'

const UseRef = () => {
    const[Value, setValue] = useState(0);
    const preValueRef = useRef();
    useEffect(() => {
      preValueRef.current = Value
    }, [Value])
    const increment = () => {
        setValue(Value + 1)
    }
    
  return (
    <div className='text-center items-center mt-44'>
        <p>Current Value: {Value}</p>
        <p>Previous value: {preValueRef.current}</p>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default UseRef



// const MenuRef = useRef()
// const buttonGroupRef = useRef()

// const toggleMenu = () => {
//     if(MenuRef && buttonGroupRef) {
//      const IsMenuOpen = MenuRef.current.style.display === "block";
//      MenuRef.current.style.display === IsMenuOpen? "none" : "block";
//      buttonGroupRef.current.style.display === IsMenuOpen? "none" : "block";
//     }
// }