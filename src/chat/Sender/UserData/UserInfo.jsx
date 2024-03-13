import { Typography ,Box ,styled} from '@mui/material'
import React from 'react'

const Component=styled(Box)`
background: white;
display:flex;
padding: 5px;

align-items:center;
cursor: pointer;
& > *{
    padding: 5px;
}
`;

const ImageICon=styled("img")({
     borderRadius:"50%",
     height:40,
     width:40,
})

const handleClick=()=>{
  console.log("hello");
}

export default function UserInfo({user}) {
  return (
    <Component onClick={handleClick}>
          <ImageICon src={user.picture} alt="dp"/>
          <Typography>{user.name}</Typography>       
    </Component>
    
  )
}
