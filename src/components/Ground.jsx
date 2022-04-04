import React from 'react'
import grass from '../images/grass.png'

export const Ground = () => {
  return (
    <div style={wrapperStyle}>
      <img style={grassStyle} src={grass} alt="grass.png" />
    </div>
  )
}

const grassStyle = {
  height: '300px',
  filter: 'grayScale(50%)',
  width: '400%',
  position: 'absolute',
  bottom: '0',
}

const wrapperStyle = {
  transform: "rotate(90deg) translateY(-100vh)",
  transformOrigin: "top left",
  height: '100vh',
  width: '100vw',
  position: "relative"
}