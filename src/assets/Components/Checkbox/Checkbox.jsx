import React, { useState } from 'react'

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
    console.log(`Checkbox ${isChecked ? 'unchecked' : 'checked'}`)
  }

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Check me
    </label>
  )
}

export default Checkbox
