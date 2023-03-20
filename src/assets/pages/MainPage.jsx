import React from 'react'
import MessageLog from '../Components/MessageLog/MessageLog'
import Checkbox from '../Components/Checkbox/Checkbox'
import MessageHover from '../Components/MessageHover/MessageHover'
import ChangeColor from '../Components/ChangeColor/ChangeColor'

function MainPage() {
  return (
    <div>
      <p>
        1. Create a button component that logs a message to the console when
        clicked: <MessageLog />
      </p>
      <p>
        2. Create a checkbox component that logs a message to the console when
        checked or unchecked. <Checkbox />
      </p>
      <p>
        5. Create a component that displays a message when the mouse hovers over
        it. <MessageHover />
      </p>
      <p>
        6. Create a component that changes its text color when clicked.{' '}
        <ChangeColor />
      </p>
    </div>
  )
}

export default MainPage
