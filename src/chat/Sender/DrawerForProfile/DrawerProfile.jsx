import React, { useState } from 'react'
import { Drawer ,AppBar ,Toolbar,Box, styled, Typography} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider';
import Profile from './Profile'
const dialogStyled={
//    left:20,
//    marginTop:2,
   boxShadow:"none",
   overFlow:"hidden",
   //borderRadius:"none"
//    height:"96%",
   width:"31.3%",
   //minWidth:"31.3%",
   background: "#ededed"
}

const Component=styled(Box)`
 height: 16%;
 background: #008069;
 display: flex;
 box-sizing: border-box;
 flex: none;
 flex-direction: row;
 color: #fff;
 & > p{
    margin-top: auto;
    padding-left: 35px;
    font-size: 20px;
    padding-bottom: 15px;

 },
 & > svg {
    margin-top: auto;
    padding-left: 35px;
    font-size: 25px;
    padding-bottom: 17px;
 }
`;
const SecComponent=styled(Box)`
 

`;

const Image=styled("img")({
    // height:"100px",
    // width:"100px",
    borderRadius:"50%",
    alignSelf:"center"
});
export default function DrawerProfile({open,setOpen}) {

    const{account}=useContext(AccountContext);
    console.log("Account>>>",account)
    const handleClose=()=>{
        setOpen(false);
    }
  return (
    <div>
       <Drawer
            //anchor={anchor}
            open={open}
            onClose={handleClose}
            PaperProps={{sx:dialogStyled}}
            style={{zIndex:1500 ,minWidth:"33%"}}
            hideBackdrop={true}
            >
            <Component>
              <ArrowBackIcon onClick={handleClose}/>
               <Typography>Profile</Typography>
            </Component>
            <SecComponent> 
                <Profile/>          
            </SecComponent>
        </Drawer>
    </div>
  )
}
