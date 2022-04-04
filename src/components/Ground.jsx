import React from 'react'
import grass from '../images/grass.png'

export const Ground = () => {
  return (
    <img style={grassStyle} src={grass} alt="grass.png" />
  )
}

const grassStyle = {
  width: '100%',
  height: '300px',
  filter: 'grayScale(50%)' 
}