import { Box, styled } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';
import MenuData from './MenuData';
import DrawerProfile from './DrawerForProfile/DrawerProfile';
import { useState } from 'react';
const Component=styled(Box)`
    height: 44px;
    background: #f0f2f5;
    padding: 8px 16px;
    display:flex;
    align-items:center;
`;

const Image=styled("img")({
    height:40,
    width:40,
    borderRadius:"50%",
    cursor:"pointer"
});

const StyledIcon=styled(Box)`
display:flex;
margin-left:auto;
& > * {
    margin-left: 2px;
    padding:6px;
    color:#000;
    margin-right:6px;
   }
 & : nth-of-type(2){                     
    font-size:20px;
    margin-top:3px;
 }
`;

//first-child  or nth-of-type(1)
export default function Header() {

    const{account}=useContext(AccountContext);
    
    const[open,setOpen]=useState(false);
    const handleClick=()=>{
           setOpen(!open);
    }

  return (
    <>
    <Component>
       <Image src={account.picture} alt='dp' onClick={handleClick}/>
       <DrawerProfile open={open} setOpen={setOpen}/>
       <StyledIcon>
        <HistoryIcon/>
        <ChatIcon/>
        <MenuData/>
       </StyledIcon>
      
    </Component>
    </>
    
  )
}

