import React, { useState } from 'react'

function ChangeColor() {
  const [isClicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!isClicked)
  }

  const textColor = {
    color: isClicked ? 'green' : 'black',
    cursor: 'pointer',
  }

  return (
    <p onClick={handleClick} style={textColor}>
      Click here to change text color!
    </p>
  )
}

export default ChangeColor
