import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from './PostItem.module.css'

const PostItem = ({post}) => {

  const {title, image, excerpt, date, slug} = post
  const formatDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/image/posts/${image}`


  return (
    <li className={classes.post} style={{width: '22%', marginBottom: '3em', padding: 0}}>
      <Link legacyBehavior href={`/posts/${slug}`} >
      <a href='/'>
        <div style={{ padding: 0}} className={classes.image}>
          <Image src={imagePath} alt={title} style={{
            width: '100%'
          }} width={300} height={200}/>
        </div>
        
        <div>
          <h3>
            {title}
          </h3>
          <time>{formatDate}</time>
          <p>{excerpt}</p>
        </div>
      </a>
      </Link>
    </li>
  )
}

export default PostItem
