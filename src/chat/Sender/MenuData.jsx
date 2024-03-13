import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box ,Menu , MenuItem, styled} from '@mui/material';

const MenuItemsStyled= styled(MenuItem)`
font-size: 14px;
padding: 15px 60px 5px 24px;
color: #4A4A4A;
`;
export default function MenuData() {

    const [open,setOpen]=useState(null);
    const handleClick=(e)=>{
      setOpen(e.currentTarget);
    }
   const handleClose=()=>{
    setOpen(null);
    }
  return (
    <Box>
      <MoreVertIcon onClick={handleClick}/>
      <Menu
        //id="demo-positioned-menu"
        //aria-labelledby="demo-positioned-button"
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItemsStyled onClick={handleClose}>New group</MenuItemsStyled>
        <MenuItemsStyled onClick={handleClose}>Archived</MenuItemsStyled>
        <MenuItemsStyled onClick={handleClose}>Starred message</MenuItemsStyled>
        <MenuItemsStyled onClick={handleClose}>Settings</MenuItemsStyled>
        <MenuItemsStyled onClick={handleClose}>Log out</MenuItemsStyled>
      </Menu>
    </Box>
  )
}
