import React, {useEffect} from 'react';
import {SessionManager} from "../Others/SessionManager";
import BuyerAppToolbar from "./BuyerAppToolbar";
import NotLoggedAppToolbar from "./NotLoggedAppToolbar";
import {Logics} from "../Others/Logics";
import PendingAppToolbar from "./PendingAppToolbar";
import SellerAppToolbar from "./SellerAppToolbar";


const AppToolbar = () => {

    const [roles, setRoles] = React.useState('');
    useEffect(() => {
        Logics.getRoles(setRoles)
    }, []);

    const New =() => {
        if(roles === "pending") return  <PendingAppToolbar/>
         else if (roles === "seller") return <SellerAppToolbar/>
        else return <BuyerAppToolbar/>
    }
    return (
        <div>
            {
                typeof(SessionManager.getAccessToken()) !== 'undefined' && SessionManager.getAccessToken()!= null ?
                    New()


                :<NotLoggedAppToolbar/> }

                {/*roles === 'pending'? <PendingAppToolbar/> : <BuyerAppToolbar/>}*/}


        </div>


    );
}

export default AppToolbar;
