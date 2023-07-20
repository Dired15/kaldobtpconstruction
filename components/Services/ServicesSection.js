
import {PageTitle} from "@/components/PageTitle";

const electricityjpg="/servicescard/electricity.jpg";
const btpjpg ="/servicescard/btp.jpg";
const publicConstructionjpg ="/servicescard/publicConstruction.jpg";
const realEstatejpg ="/servicescard/realEstate.jpg";
const telecomjpg ="/servicescard/telecom.jpg";
const electronicjpg ="/servicescard/electronic.jpg";

export function ServicesSection(props){

    const servicesList=[
        {name:"Travaux Publics",description:"",id:"publicConstruction",src:publicConstructionjpg,list:["Embelissement de la ville","Ouverture de voie","Construction batiment publique","Eclairage publique"]},
        {name:"Immobilier",description:"",id:"realEstate",src:realEstatejpg,list:["Topographie lotissement","Vente de terrain","Vente batiment construit","Construction Projet immobilier"]},
        {name:"BTP",description:"",id:"btp",src:btpjpg,list:["Construction Batiment","Réhabiliation","Conception plan 2D/3D","Etude de projet","Ouverture de voirie"]},
        {name:"Electricité",id:"electricity",src:electricityjpg,description:"",list:["Génie électrique","Construction Réseau Electrique HTA/BTA/EP","Electricité Batiment","installation industrielle","Maintenance industriel","Installation panneaux solaire"]},
        {name:"Telecom",id:"telecom",src:telecomjpg,description:"",list:["Installation de ligne de communication","Installation fibre optique","Installation poste privée"]},
        {name:"Informatique/ Electronique",id:"electronic",src:electronicjpg,description:"",list:["Maintenance","Programmation pilote","Installation caméra de surveillance","Installation appareil domestique et industriel","systeme de surveillance et protection domestique"]},
    ];

    const servicesListElement=servicesList.map((element,index)=>{
        let theme=((index%2)==0)?" bg-[hsl(0,0%,86%)]":" bg-[hsl(0,0%,86%)] flex-row-reverse ";
        return (<ServiceCard key={element.name} theme={theme} service={element}/>);
    });
    return (
        <>
            <PageTitle name="Nos Services"/>
            {servicesListElement}
        </>
    );
}

function ServiceCard(props){

    const listTask=props.service.list.map((element)=>{
        return (<li className="w-fit text-center text-logoOrange font-bold mb-2">{element}</li>);
    });
    return (
        <div id={props.service.id} className={"xl:px-[140px] md:p-8 p-4 w-full md:h-[600px] h-[800px]  delimitation-blue flex flex-col items-center justify-center"+props.theme}>
            <div className={" shadow-2xl delimitation-purple w-full md:h-full h-full flex md:flex-row flex-col-reverse justify-end md:justify-center bg-white items-center "+props.theme}>
                <div className="md:w-[50%] w-full flex flex-col justify-center items-center  delimitation-red p-8">
                    <h2 className="text-center mb-6 break-normal">{props.service.name}</h2>
                    <p >{props.service.description}</p>
                    <ul className="flex flex-col justify-center items-center">
                        {listTask}
                    </ul>
                </div>
                <div className="delimitation-green aspect-video md:h-full h-[50%] md:w-[50%] w-full">
                    <img className="w-full h-full object-cover"src={props.service.src}/>
                </div>
            </div>
        </div>
    );
}