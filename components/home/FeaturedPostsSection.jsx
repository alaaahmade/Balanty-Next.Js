import { Typography } from '@mui/material'
import React from 'react'
import PostsGrid from '../Posts/PostsGrid'

const FeaturedPostsSection = ({posts}) => {
  return (
    <section style={{
      backgroundColor: '#ccc',
      color: '#414040',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      width: '100%',
      p: '5em'
    }} >
      <Typography variant='h2' sx={{p: '3rem'}} > Featured Posts</Typography>
      <PostsGrid posts={posts}/>
    </section>
  )
}

export default FeaturedPostsSection
