import Link from "next/link";
import Image from "next/image";
// import electricityjpg from "@/public/servicesCard/electricity.jpg";
// import btpjpg from "@/public/servicesCard/btp.jpg";
// import publicConstructionjpg from "@/public/servicesCard/publicConstruction.jpg";
// import realEstatejpg from "@/public/servicesCard/realEstate.jpg";
// import telecomjpg from "@/public/servicesCard/telecom.jpg";
// import electronicjpg from "@/public/servicesCard/electronic.jpg";

const electricityjpg="/servicescard/electricity.jpg";
const btpjpg ="/servicescard/btp.jpg";
const publicConstructionjpg ="/servicescard/publicConstruction.jpg";
const realEstatejpg ="/servicescard/realEstate.jpg";
const telecomjpg ="/servicescard/telecom.jpg";
const electronicjpg ="/servicescard/electronic.jpg";

export function ServicesSection(props){

    const servicesList=[
    {name:"Travaux Publics",link:"/services#publicConstruction",img:publicConstructionjpg},
    {name:"Immobilier",link:"/services#realEstate",img:realEstatejpg},
    {name:"BTP",link:"/services#btp",img:btpjpg},
    {name:"Electricité",link:"/services#electricity",img:electricityjpg},
    {name:"Telecom",link:"/services#telecom",img:telecomjpg},
    {name:"Informatique",link:"/services#electronic",img:electronicjpg}];

    const servicesListElements=servicesList.map((element)=>{
        return (<ServicesCard key={element.name} service={element}/>)
    });

    return (
        <div className="   delimitation-purple h-fit flex flex-col items-center  py-4">
            
            <h2 className="mb-12 ">
                Nos Services
                <div></div>
            </h2>
            
            <ul className="w-full xl:px-[140px] md:px-8 px-4 flex flex-wrap justify-center delimitation-red ">
                {servicesListElements}
            </ul>
        </div>
    );

}

 function ServicesCard(props){
    const src=props.service.img;
    const style=" bg-cover bg-no-repeat bg-[url("+ src +")] ";


    return (
        
        <li className="delimitation-blue lg:w-[30%] md:w-[45%] aspect-video mb-14 mr-2  shadow-xl p-2 ">
         <Link href={props.service.link}>   
            <div className={"w-full relative h-[80%] mb-6 delimitation-green  "}>
                <img className="object-cover w-full h-full" src={src}/> 
                {/* <Image className="object-fill" src={props.service.img}/> */}
            </div>
            <div className="">
                <h3 className="text-logoBlue mb-2">{props.service.name}</h3>
                
                    <button className="text-logoOrange font-bold">En savoir plus</button>
                
            </div>
          </Link>  
        </li>
    );
}