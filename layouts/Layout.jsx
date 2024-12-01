import { Box } from '@mui/system'
import React from 'react'

import {Header} from '../components'

const Layout = ({children}) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}

export default Layout
