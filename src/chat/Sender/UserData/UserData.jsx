import React from 'react'
import { Box ,Divider,styled } from '@mui/material'
import { AccountContext } from '../../../context/AccountProvider'
import { useContext } from 'react'
import { useEffect , useState} from 'react'
import { getAllUsers } from '../../../service/api'
import UserInfo from './UserInfo'

const Component=styled(Box)`
 overflow: overlay;
`;

const DividerSty=styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

export default function UserData() {

    const[users, setUsers]= useState([]);
    const {account}=useContext(AccountContext)
    const getUsers=async()=>{
        const allUsers=await getAllUsers();
        setUsers(allUsers);
    }
    useEffect(()=>{
        getUsers();
    },[])

    console.log("Users",users)
  return (
    <Component >
       {
        users&&users.map(user=>
            user.sub!==account.sub&&
            <>
            <UserInfo user={user}/>
            <DividerSty/>
            </>
            
        )
       }
    </Component>
  )
}
