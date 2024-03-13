import React from 'react'
import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Component=styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    align-items: center;
    margin-top: 3px;
`;

const Wrapper=styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 19px;
`;
const IconStyled=styled(Box)`
    position: absolute;
    height: 100%;
    padding: 6px 10px;
    color: #919191;
`;

const InputStyled=styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    height: 15px;
    font-size: 14px;
`;
export default function Search() {
  return (
    <Component>
        <Wrapper>
            <IconStyled>
                <SearchIcon
                    fontSize='small'
                />
            </IconStyled>
            <InputStyled
                placeholder='search or start new chat'
            />
        </Wrapper>
      
    </Component>
  )
}
