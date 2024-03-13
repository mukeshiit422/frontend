import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MessageBody from './MessageBody'
import { Box } from '@mui/material'

export default function UserMessage() {
  return (
    <Box>
      <Header/>
      <MessageBody/>
      <Footer/>
    </Box>
  )
}
