
import {PageTitle} from "@/components/PageTitle";


export function ProjectSection(props){
    const projectList=[
        {name:"Espace Leibie de Bouaflé",description:"",folder:{name:"espaceleibie",size:6}},
        {name:"Projet de réhabilitation monument orphahoel de Bouaflé",description:"",folder:{name:"orphahoel",size:6}},
        {name:"Projet Espace j'aime Bouaflé",description:"",folder:{name:"espacejaime",size:6}},
        {name:"Projet Installation d'éclairage public de 10 villages",description:"",folder:{name:"eclairagepublic",size:6}},
        {name:"Projet éclairage public de la ville de Bouaflé",description:"",folder:{name:"eclairagebouafle",size:6}},
        {name:"Projet Construction de 20 cité à Yamoussoukro",description:"",folder:{name:"citeyamoussoukro",size:6}}
    ];

    const projectListElement=projectList.map((element)=>{
        return (<ProjectCard key={element.name} project={element}/>
        );
    });
    return (
        <>
            <PageTitle name="Nos Services"/>
            <div className="flex flex-col items-center ">
                
                <ul className="w-full">
                    {projectListElement}
                </ul>
            </div>
        </>
    );

}

function ProjectCard(props){

    return (
        <li  className="px-[140px] w-full h-[80vh] delimitation-purple py-16">
           
            <div>
                <h3 className="mb-12 text-logoBlue">{props.project.name}<div></div></h3>
                {/* <p>{props.project.description}</p> */}
            </div> 
            <ProjectCarousel folder={props.project.folder}/>
        </li>
    );
}

function ProjectCarousel(props){
    
    let imageList=[];

    const setImageList=()=>{
        for(i=0;i<=props.size;i++)
        {
            imageList.push(<li key={props.name+i}><img src={"/assets/project/"+props.name+i}/></li>)
        }
    };
    return (
        <ul className="delimitation-blue w-full h-2 flex flex-wrap">
            {imageList}
        </ul>
    );
}
