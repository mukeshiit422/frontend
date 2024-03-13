import React from 'react'
import Header from './Header'
import Search from './Search'
import { Box, styled } from '@mui/material'
import UserData from './UserData/UserData'
const Component=styled(Box)`
  background: #f0f2f5;
`;
export default function Sender() {
  return (
    <Component>
      <Header/>
      <Search/>
      <UserData/>
    </Component>
  )
}
