import React from 'react'

function MessageLog() {
  const handleClick = () => {
    console.log('Message logged!')
  }
  return (
    <div>
      <button onClick={handleClick}>click for log</button>
    </div>
  )
}

export default MessageLog
