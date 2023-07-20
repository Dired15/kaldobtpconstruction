import Image from "next/image";
import Link from "next/link";
import logopng from "@/public/logo.png";
import {Roboto} from "next/font/google";

const roboto=Roboto(
  {
    weight:["400","700"],
    style:["normal","italic"],
    subsets:["latin"],
  }
);

export function Header(props){

    

    return(
        <header className={"xl:px-[140px] md:px-8 px-4 w-full delimitation-red flex justify-between items-center md:h-[100px] lg:h-[150px] h-[90px] font-bold text-logoBlue "+roboto.className}>
            <Logo/>
            <Navbar/>
            <NavbarMobile toggleMenuMobile={props.toggleMenuMobile}/>
            <MenuMobile state={props.menuMobileState} toggleMenuMobile={props.toggleMenuMobile}/>
        </header>
    );
}

function Navbar(prosp){
    return(
        <navbar className="md:block hidden">
            <ul className="flex justify-between ">
                <li className="ml-4">
                    <Link href="/">Accueil</Link>
                </li>
                <li className="ml-4">
                    <Link href="/about">Notre entreprise</Link>
                </li>
                <li className="ml-4">
                    <Link href="/services">Services</Link>
                </li>
                <li className="ml-4">
                    <Link href="/projects">Projets</Link>
                </li>
                <li className="ml-4">
                    <Link href="/contacts">Contacts</Link>
                </li>
            </ul>
        </navbar>
    );
}

function NavbarMobile(props){

    const handleClick=(e)=>{
        props.toggleMenuMobile();
    };
    return (
        <div onClick={handleClick} className=" h-[36%] w-[12%] flex flex-col md:hidden justify-between">
            <div className="w-full border border-[3px] border-logoBlue"></div>
            <div className="w-full border border-[3px] border-logoBlue"></div>
            <div className="w-full border border-[3px] border-logoBlue"></div>
        </div>
    );
}


function Logo(props){

    return (<div className="delimitation-purple h-[90%] ">
        <img className="h-full" src="/logo.png" alt="logo"/>
    </div>);
}

function MenuMobile(props){
    
    const display=props.state?" flex ":" hidden ";
    const handleClick=(e)=>{
        props.toggleMenuMobile();
    };

    return (
        <div  className={"text-logoBlue absolute delimitation-red w-full h-[100%] p-8 m-0 z-50 top-0 right-0 bg-white overflow-hidden flex flex-col items-center"+display}>
            <div className="delimitation-green w-full h-[50px] flex justify-end mb-8 ">
                <div onClick={handleClick} className="delimitation-purple aspect-square w-[15%] relative">
                    <div className="w-full border border-2 border-logoBlue absolute left-0 top-[50%] rotate-45"></div>
                    <div className="w-full border border-2 border-logoBlue absolute left-0 top-[50%] -rotate-45"></div>
                </div>
            </div>
            <ul className="flex flex-col justify-between items-center ">
                <li onClick={handleClick} className="mb-4">
                    <Link  href="/">Accueil</Link>
                </li>
                <li onClick={handleClick} className="mb-4">
                    <Link href="/about">Notre entreprise</Link>
                </li>
                <li onClick={handleClick} className="mb-4">
                    <Link href="/services">Services</Link>
                </li>
                <li onClick={handleClick} className="mb-4">
                    <Link href="/projects">Projets</Link>
                </li>
                <li onClick={handleClick} className="mb-4">
                    <Link href="/contacts">Contacts</Link>
                </li>
            </ul>
        </div>
    );
}

