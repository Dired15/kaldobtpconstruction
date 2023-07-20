import Link from "next/link"
import {Roboto} from "next/font/google";

const roboto=Roboto(
  {
    weight:["400","700"],
    style:["normal","italic"],
    subsets:["latin"],
  }
);

export function Footer(props){

    return(
        <footer className={"w-full minh-[35vh] text-white delimitation-red flex flex-col md:flex-row md:items-start  items-center justify-center p-8 bg-[hsl(198,82%,17%)] "+roboto.className}>
          
          <div className="md:mr-36 flex flex-col md:items-start items-center mb-8">
            <h3 className="mb-4">Plan du site</h3>
            <ul className="text-lightGray flex flex-col items-center md:items-start">
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/about">Notre entreprise</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Projets</Link></li>
                <li><Link href="/contacts">Contacts</Link></li>
            </ul>
          </div> 

          <div className="md:mr-36 flex flex-col md:items-start items-center mb-8">
            <h3 className="mb-4">Nos services</h3>
            <ul className="text-lightGray flex flex-col items-center md:items-start ">
                <li><Link href="/services#publicConstruction">Travaux Publics</Link></li>
                <li><Link href="/services#realEstate">Immobilier</Link></li>
                <li><Link href="/services#btp">BTP</Link></li>
                <li><Link href="/services#electricity">Electricité</Link></li>
                <li><Link href="/services#telecom">Telecom</Link></li>
                <li><Link href="/services#electronic">Informatique/Electronique</Link></li>
            </ul>
          </div>

          <div className="flex flex-col md:items-start items-center">
            <h3 className="mb-4" >Contacts</h3>
            <ul className="text-lightGray flex flex-col items-center md:items-start">
                <li>telephone</li>
                <li>mail</li>
                <li>adresse</li>
            </ul>
          </div> 
        </footer>
    );
}