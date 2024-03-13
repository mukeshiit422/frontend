import {AppBar, Toolbar ,styled, Box} from '@mui/material'
import React from 'react'
import Login from './account/Login';
import ChatDialog from '../chat/chatDialog';
import { AccountContext } from '../context/AccountProvider';
import { useContext } from 'react';
const Header= styled(AppBar)`
 height:220px;
 background-color:#00bfa5;
 box-shadow:none;
`;

const ChatHeader= styled(AppBar)`
 height:125px;
 background-color:#00A884;
 box-shadow:none;
`;

const Display=styled(Box)`
height:100vh;
background-color:#DCDCDC
`;
 const Messenger=()=> {
  const {account}=useContext(AccountContext);

  return (
    <Display>
      {
         account ?
         <>
          {/* <ChatHeader>
          <Toolbar></Toolbar>
         </ ChatHeader> */}
         <ChatDialog/>
         </>
          
         :
         <>
         < Header>
          <Toolbar></Toolbar>
         </ Header>
         <Login/>
         </>
      }
      
    </Display>
  )
}
export default Messenger;
