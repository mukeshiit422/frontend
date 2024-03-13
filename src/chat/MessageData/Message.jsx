import { Typography ,Box, styled} from '@mui/material'
import React from 'react'
import UserMessage from './MessageInfo/UserMessage';

const Imag=styled("img")({
   height:300,
   width:400,
   marginTop:100,
   //backgroundColor: "#f0f2f5",
   border:"none",
   boxShadow:"none"

});

const Component=styled(Box)`
  background: #f0f2f5;
  height: 100vh;
  width:100%
  display: flex;
  text-align: center;
  position: relative;
  & : nth-of-type(1){
    padding: 10px;
    color: #41525d;
    font-size: 35px;
    font-family: inherit;
  }

  & : nth-of-type(2){
    margin-top: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #667781;
  }

  & : nth-of-type(3){
    bottom: 40px;
    color: #8696a0;
    font-size: 14px;
    line-height: 20px;
    margin-top: 45px;
  }
 
`;
export default function Message() {
  return (
    <Component>
     < Imag src={require("../../constant/EmptyMess.png")} alt="empty_message"/>
        <Typography>WhatsApp Web</Typography>
           <Typography>Send and receive messages without keeping your phone online.<br/>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Typography>
        <Typography>End-to-end encrypted</Typography>
    </Component>
    
  )
}
