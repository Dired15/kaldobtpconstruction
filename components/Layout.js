import {Header} from "./Header";
import {Footer} from "./Footer";
import {Roboto} from "next/font/google";
import {useState} from "react";

const roboto=Roboto(
  {
    weight:["400","700"],
    style:["normal","italic"],
    subsets:["latin"],
  }
);

export default function Layout({children}){

    const [menuMobileState,setMenuMobile]=useState(false);

    const handleClick=(e)=>{

    };

    const toggleMenuMobile=()=>{
        

        setMenuMobile(!menuMobileState);
        if(menuMobileState)
        {
            document.body.classList.toggle("overflow-hidden");
        }
        else
        {
            document.body.classList.toggle("overflow-hidden");
        }
    }
    return(
        <>
         <Header toggleMenuMobile={toggleMenuMobile} menuMobileState={menuMobileState}/>
         <main className={roboto.className}>{children}</main>
         <Footer/>

        </>
    );
}