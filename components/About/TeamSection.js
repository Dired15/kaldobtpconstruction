

export function TeamSection(props){

    const teamList=[
        {name:"Membre",role:"Role",img:"/profilePicture.jpg"},
        {name:"Membre",role:"Role",img:"/profilePicture.jpg"},
        {name:"Membre",role:"Role",img:"/profilePicture.jpg"},
        {name:"Membre",role:"Role",img:"/profilePicture.jpg"},
    ];

    const teamListElements=teamList.map((element)=>{
        return (<TeamMemberCard key={element.name} member={element}/>);
    });
    return (
        <div className="lg:px-[140px] md:px-8 p-4 w-full  py-14 delimitation-red flex flex-col  items-center ">
            <h2 className="mb-20">Notre équipe<div></div></h2>
            <ul className="flex flex-col md:flex-row md:flex-wrap delimitation-green w-full items-center justify-between">
                {teamListElements}
            </ul>
        </div>
    );
}

export function TeamMemberCard(props){

    return (
        <li className=" w-[90%] md:w-[30%] delimitation-purple shadow-xl mb-12">
            <div className="w-full h-[70%] mb-6">
                <img className="w-full h-full object-cover "src={props.member.img}/>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-logoBlue">{props.member.name}</h3>
                <p className="text-logoOrange font-bold">{props.member.role}</p>
            </div>
        </li>
    );
}