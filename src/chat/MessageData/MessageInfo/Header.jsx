import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import MoreVert from '@mui/icons-material/MoreVert';
const Component=styled(Box)`
    height: 44px;
    background: #f0f2f5;
    padding: 8px 16px;
    display:flex; 
    align-items:center;
   
`;

const Status=styled(Box)`
display:flex; 
align-items:center;
`;

const Name=styled(Typography)`
margin-left: 12px !important;

`;

const State=styled(Typography)`
margin-left: 12px !important;
color: rgb(0, 0, 0, 0.6);
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
  return (
    <Component>
       <Status>
          <Image src={require("../../../constant/EmptyMess.png")} alt='dp'/>
          <Box>
              <Name>Name</Name>
              <State>On</State>
          </Box>
       </Status>
       <StyledIcon>
          <SearchIcon/>
          <MoreVert/>
       </StyledIcon>
    </Component>
  )
}

