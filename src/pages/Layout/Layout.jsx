import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import { useContext } from "react";
import { BackgroundContext } from "../../context/BackgroundContext";

const Layout = () =>{
   const {changeBackground} = useContext(BackgroundContext)
   
return(
<>

    <Header/>

    <body style={{background:changeBackground ? "rgb(34, 34, 34)" : "white"}}>
        <Outlet/>
    </body>
    
   
</>)
}

export default Layout;
