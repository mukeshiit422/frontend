import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'

const ProfilePic=styled(Box)`
 display:flex;
 justify-content:center;
`;

const Description=styled(Box)`
 padding: 30px;
 justify-content: center;
 font-size: 14px;
 color: #8696a0;
`;
const ImageIcon=styled("img")({
    height:200,
    width:200,
    borderRadius:"50%",
    padding:"10px"
})

const Name=styled(Box)`
  background: #FFFFFF;
  padding: 12px 30px 2px;
  & : first-child{
    color: #008069;
    font-size: 14px;
    padding: 10px;
    
  }
  & : last-child{
    font-size: 200;
    padding: 10px;
  }
`;
export default function Profile() {
    const {account}=useContext(AccountContext);
  return (
    <div>
      <ProfilePic>
          <ImageIcon src={account.picture} alt="dp"/>
      </ProfilePic>
      <Name>
          <Typography>Your name</Typography>
          <Typography>{account.name}</Typography>
      </Name>
      <Description>
        <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>  
      </Description>
      < Name>
        <Typography>About</Typography>
        <Typography>Eat, Sleep ,Repeat</Typography>
      </ Name>
    </div>
  )
}
