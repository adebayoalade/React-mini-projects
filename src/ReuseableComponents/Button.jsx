import React from 'react'

const Button = ({btntext, className}) => {
  return (
    <button className={`px-8 py-2 rounded-full ${className}`}>{btntext}</button>
  )
}

export default Button