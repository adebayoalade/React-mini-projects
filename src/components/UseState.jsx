import React, { useState } from 'react'

const UseState = () => {
    const[Count, setCount] = useState(0);
    const increment = () => {
        setCount(Count + 1)
    }
  return (
    <div className='text-center items-center mt-44'>
        <p>Count: {Count}</p>
        <button onClick={increment} className='px-6 py-2 bg-slate-600 rounded-full'>increment</button>
    </div>
  )
}

export default UseState