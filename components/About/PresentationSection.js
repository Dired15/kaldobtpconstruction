
export function PresentationSection(props)
{
    return (
        <div className="flex flex-col lg:flex-row w-full md:h-[800px] h-[900px] delimitation-purple bg-logoBlue">
            <img className="lg:w-[50vw] w-full h-[50%] lg:h-full object-cover  delimitation-green " src="/bgAbout.jpg"/>
            <div className="lg:w-[50vw] w-full flex-1 flex flex-col justify-center items-center  md:px-0 px-4  ">
                <div className="lg:w-[100%] lg:px-8  w-full h-full flex flex-col lg:items-start items-center lg:justify-center delimitation-red py-8">
                    <h2 className="text-logoOrange mb-8">Qui sommes-nous?</h2>
                    <div className="md:flex md:justify-center lg:flex-col">
                        <p className="text-white md:w-[40%] lg:w-full  md:mr-14 lg:mr-0 lg:mb-6 mb-4">Kaldo BTP Construction est une entreprise crée sur l'initiative de Monsieur Kaldo en 2012.
                            Au cours des années, nous avons su nous prouver comme un acteur compétent dans le domaine en réalisant de
                            nombreux projets tant dans le secteur privée que public.</p>
                        <p className="text-white md:w-[40%] lg:w-full">Débutant d'abord dans le domaine de l'électricé, nous avons 
                            étendu notre expertise ce qui nous permet aujourd'hui d'oeuvrer sur de nombreux aspects du BTP et mener à bien des réalisation complexes.
                            Nous avons également pu réunir une équipe compétente et soudé, qui a à coeur d'offrir un services de qualité.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}