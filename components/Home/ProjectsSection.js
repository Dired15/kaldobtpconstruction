import Link from "next/link";


export function ProjectsSection(props){

    return (
        <div className="xl:px-[140px] w-full lg:h-[600px] xl:h-[650px] flex flex-col-reverse lg:flex-row justify-center delimitation-blue bg-[hsl(206,97%,29%)] text-white lg:py-8">
            <div className="lg:w-[40%] w-[100%] h-full delimitation-green flex flex-col lg:items-start items-center lg:py-14 py-8">
                <h2 className="lg:mb-14 mb-10 text-white lg:items-start items-center ">Projets<div></div></h2>
                <h3 className="mb-6">Des réalisations de qualités</h3>
                <p className="mb-10 text-lightGray lg:w-[25vw] md:w-[60%] w-[70%]">Nous avons à notre actif une multitude de projets réalisé avec succès. Nos partenaires ont sue nous faire nous faire confiance
                    et la qualité de notre réalisation est la preuve de notre expertise.  
                </p>
                <Link href="/projects">
                    <button className="w-fit p-4 rounded-lg bg-white text-logoBlue font-bold">En savoir plus</button>
                </Link>
            </div>
            <div className=" lg:w-[50%] w-[100%] h-[100%] delimitation-purple ">
                <PhotoWall/>
            </div>
        </div>
    );
}

function PhotoWall(props){

    return (
        <div className="delimitation-yellow w-full h-full   ">
            <img src="/photowall/photo2.jpg" className="object-cover  w-full h-full    " />
            {/* <img src="/photowall/photo2.jpg" className="object-cover z-20 w-[15vw]  h-[50vw] top-[10%] left-[60%]  absolute"/>
            <img src="/photowall/photo3.avif" className="object-cover z-30 w-[15vw]  h-[30vw] top-[50%] left-[10%]  absolute"/>
            <img src="/photowall/photo4.jpg" className="object-cover z-40 w-[15vw]  h-[50vw] top-[40%] left-[35%]  absolute"/>
            <img src="/photowall/photo5.jpg" className="object-cover z-50 w-[15vw]  h-[30vw] top-[20%] left-[20%]  absolute"/> */}
        </div>
    );
}