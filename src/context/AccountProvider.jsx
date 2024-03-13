import { useState } from "react";
import { createContext } from "react"

export const AccountContext=createContext(null);

 const AccountProvider=({children})=>{

    const [account,setAccount]=useState(null);
    const [users,setUsers]=useState(null);
    return(
        <AccountContext.Provider value={{
            account,
            setAccount,
            users,
            setUsers
            }}>
            {children}
        </AccountContext.Provider>
    )

}
export default AccountProvider;