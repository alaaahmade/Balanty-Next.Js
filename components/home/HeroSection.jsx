import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React, { useState } from 'react'

const HeroSection = () => {
  return (
    <Box
    sx={{
      height: '80vh',
      width: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 0,
      m:0
    }}>
      <Box
      sx={{
        backgroundColor: 'blue',
        width:'50%',
        height: '100%',
        border: '0.5px solid #01031C',
        transition: 'all 0.5s linear',

        ":hover":{
          width: '280% !important '
        }
      }}
      
      >
        <Typography sx={{
          width:'300px',
          background: '#00000075'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo illum commodi asperiores aliquid repellat nostrum id expedita itaque voluptas nam libero unde ullam sunt quis, minus sapiente dolorum, non veniam!
        </Typography>

      </Box>
      <Box
      sx={{
        backgroundColor: 'blue',
        width: '50%',
        height: '100%',
        border: '0.5px solid #01031C',
        transition: 'all 0.5s linear',

        ":hover":{
          width: '280% !important '
        }
      }}>

      </Box>
    </Box>
  )
}

export default HeroSection
