import { Box, styled, Typography } from '@mui/material';
import React from 'react'


export default function MessageBody() {

  const Wrapper=styled(Box)`
  background-image:url(${'../../../constant/whatsappbc.png'});
  `;


//   const Component=styled(Box)({
//     width: "100%",
//     height: "80vh"
//  });

  const Image=styled("img")({
     width: "100%",
     height: "85vh"
  });

  return (

    <Wrapper>
      
      {/* <Typography>message</Typography> */}
       <Image src={require("../../../constant/whatsappbc.png")} alt='background'/>
       
    </Wrapper>
  )
}
