import { Box, width, } from '@mui/system'
import {Logo} from '../../styles/components.styled'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#01031C',
        m: 0,
        p: 0,
      }}
    >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:'2.3rem',
        m: '0 5em',
        p: 2
      }}
    >

      <Link 
      style={{
        textDecoration: 'none',
        color: '#fff',
        padding: '5px 10px',
        background: '#2cb674',
        transition: '0.2s',
        borderRadius: '3px',
        border: '1px solid transparent',
      
        '&:hover': {
          color: '#2cb674',
          background: 'transparent',
          border: '1px solid #2cb674',
        },
      }}
        href={'/'}
        >
          Log in
        </Link>
        <ul
          style={{
            display: 'flex',
            gap: '2em',
            listStyleType: 'none'
          }}
        >
          <li>
          <Link style={{
            color: '#ccc',
            textDecoration: 'none',
            fontSize: '18px'
          }} href={'/posts'}>Home</Link>
          </li>
          <li>
          <Link style={{
            color: '#ccc',
            textDecoration: 'none',
            fontSize: '18px'
          }} href={'/posts'}>About Us</Link>
          </li>
          <li>
          <Link style={{
            color: '#ccc',
            textDecoration: 'none',
            fontSize: '18px'
          }} href={'/posts'}>Services</Link>
          </li>
          <li>
          <Link style={{
            color: '#ccc',
            textDecoration: 'none',
            fontSize: '18px'
          }} href={'/contact'}>Contact Us</Link>
          </li>
        </ul>

          <Logo style={{width: '110px'}} src='layouts/Logo.svg' alt='Logo'/>
    </Box>
    </Box>
  )
}

