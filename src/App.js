import React, { useState } from 'react'
import styles from './assets/Styles/App.css'
import PostData from './Components/PostData/PostData'

function App() {
  const [postId, setPostId] = useState('')
  const [post, setPost] = useState(null)

  const handleChange = (event) => {
    setPostId(event.target.value)
  }

  const handleClick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      //.then((data) => console.log(data))
      .then((data) => setPost(data))

      .catch((error) => console.error(error))
    if (!postId || postId <= 0 || postId > 100) {
      console.log('ID not valid')
    } else {
      console.log('ID valid')
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="postId">Post ID:</label>
        <input type="text" id="postId" value={postId} onChange={handleChange} />
        <button onClick={handleClick}>Fetch Post</button>
      </div>
      {post && <PostData post={post} />}
    </div>
  )
}

export default App

/////////////////////////////
/////////////////////////////
////////////////////////////
/*
/////events
////////////////////////////
//import './App.css'
//import "./assets/styles/App.css";
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleChange2(event) {
    setValue2(event.target.value)
  }

  function checkPassword(value) {
    if (value) {
      console.log('good')
    } else {
      console.log('wrong password')
    }
  }

  return (
    <div className="App">
      <input type="number" value={value} onChange={handleChange} />
      <input type="text" value={value2} onChange={handleChange2} />
      <h3>
        {+value} + {+value2} = {+value + +value2}
      </h3>
    </div>
  )
}

export default App

/////////////////////////////////////////
/////////////////////////////////////////

/*   /*  function checkPassword(value) {
    if (value) {
      console.log('good')
    } else {
      console.log('wrong password')
    }
  } 

  return (
    <div className="App">
      <input type="text" value={value} onChange={handleChange} />
      <input type="text" value={value2} onChange={handleChange2} />
      <h3>
        {+value} + {+value2} = {+value} + {+value + +value2}
      </h3>
    </div>
  )
}

export default App */

/*////////////////onclick
//import './App.css'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(0)

  function handleClick() {
    setAmount(amount + 1)
  }

  return (
    <div className="App">
      <h3>You clicked {amount} times</h3>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
*/
