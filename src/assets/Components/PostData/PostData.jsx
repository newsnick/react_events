import React, { useState } from 'react'
import styles from './PostData.module.css'

function PostData({ post }) {
  return (
    <div className={styles.post}>
      <h3>{post.id}</h3>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostData
