import { Box, Dialog, styled } from "@mui/material"
import Sender from './Sender/Sender'
import Message from './MessageData/Message'
import { useEffect } from "react";
import { getAllUsers } from "../service/api";
import UserMessage from "./MessageData/MessageInfo/UserMessage";
const dialogStyled={
    height: "96%",
    //margin:"%",
    width:"100%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overFlow:"hidden",
    borderRadius:"none"
}

const Parent=styled(Box)`
 display:flex;
 background: #fff;
 height: 100vh;
`;

const SenderInfo=styled(Box)`
min-width:450px;
background: #fff;

`;

const SentMessage=styled(Box)`
    background: #fff;
    width:73%;
    min-width:300px;
    height:100%;
    border-left:1px solid rgba(0,0,0,0.14);
`;

{/* <Dialog
open={true}
PaperProps={{sx:dialogStyled}}
hideBackdrop={true}
maxWidth={"md"}
> */}
const ChatDialog=()=>{
   
    useEffect(()=>{
       
    },[])

return(
   
     <Parent>
        <SenderInfo>
            <Sender/>
        </SenderInfo>

        <SentMessage>
           {/* <Message/> */}
           <UserMessage/>
        </SentMessage>
     </Parent>
    // </Dialog>
   
  )

}

export default ChatDialog