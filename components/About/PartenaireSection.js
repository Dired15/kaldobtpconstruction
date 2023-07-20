export function PartenaireSection(props){

    const PartenaireList=[
        {name:"Partenaire",img:""},
        {name:"Partenaire",img:""},
        {name:"Partenaire",img:""},
        {name:"Partenaire",img:""},
    ];

    const PartenaireListElements=PartenaireList.map((element)=>{
        return (<PartenaireCard key={element.name} member={element}/>);
    });
    return (
        <div className="lg:px-[140px] md:p-8 p-4 w-full  bg-lightGray  delimitation-red flex flex-col items-center">
            <h2 className="mb-8">Ils nous ont fait confiance<div></div></h2>
            <ul className="flex flex-col md:flex-row md:flex-wrap delimitation-green items-center w-full justify-between">
                {PartenaireListElements}
            </ul>
        </div>
    );
}

export function PartenaireCard(props){

    return (
        <li className="w-[90%] md:w-[30%]  delimitation-purple  mb-12   delimitation-purple">
            <div className="w-full h-[70%] mb-6">
                <img className="w-full shadow-xl rounded-full delimitation-green aspect-square object-cover "src={props.member.img}/>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-logoBlue">{props.member.name}</h3>
                {/* <p>{props.member.role}</p> */}
            </div>
        </li>
    );
}