import React from 'react'
import classes from './PostGrid.module.css'
import PostItem from './PostItem'

const PostsGrid = ({posts}) => {
  return (
    <ul style={{
      listStyleType: 'none',
      m: 0,
      p: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      gap: '3.5%',
      width: '88%'
    }} >
      {posts.length > 0 && posts.map(post => <PostItem key={post.slug} post={post}/> )}
    </ul>
  )
}

export default PostsGrid
