import { Dialog, List, ListItem, Typography ,Box, styled} from '@mui/material'
import React from 'react'
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { AccountContext } from '../../context/AccountProvider';
import { useContext } from 'react';
import { addUser } from '../../service/api';
const dialogStyled={
    height: "96%",
    marginTop:"12%",
    width:"60%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overFlow:"hidden"
}

const Parent=styled(Box)`
display:flex;
`;

const Container=styled(Box)`
padding:56px 0 56px 56px
`;

const QRCode=styled("img")({
    height:264,
    width:264,
    margin:"50px 0 0 50px"
});

const ListStyle=styled(List)`
 & > li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
    color:#4a4a4a;
 }
`;

const Title=styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;

`;
export default function Login() {

  const{setAccount,setUsers}=useContext( AccountContext);

  const handleSuccess=async(res)=>{
    const decode=jwt_decode(res.credential);
    setAccount(decode);
    await addUser(decode);
    }

  const handleError=(res)=>{
      console.log("error",res)
    }
  return (
      <Dialog
      open={true}
      PaperProps={{sx:dialogStyled}}
      hideBackdrop={true}
      >
      <Parent>
        <Container>
            <Title>To use WhatsApp on your computer:</Title>
            <ListStyle>
                <ListItem>1. Open whatsApp on your phone </ListItem>
                <ListItem>2. Tap menu settings and select whatsApp web</ListItem>
                <ListItem>3. Point your phone to this screen to capture the code</ListItem>
            </ListStyle>
        </Container>
        <Box>
          <QRCode src={require('../../constant/qrCode.png')} alt='QR code'/>
          <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          />
        </Box>
      </Parent>
      </Dialog>
  )
}
