import {PageTitle} from "@/components/PageTitle";


export function ContactsSection(props){

    return (
        <>
            <PageTitle name="Contacts"/>    
            <div className="xl:px-[140px] lg:h-[800px] lg:p-14 md:p-8 p-6 w-full  flex flex-col justify-center items-center delimitation-red bg-lightGray">
                <div className="w-full xl:h-full  md:h-full flex flex-col lg:flex-row delimitation-green shadow-2xl bg-white rounded-lg">
                    <ContactsInformation/>
                    <ContactsForm/>
                </div>
            </div>
        </>
    );
}

function ContactsInformation(props){

    return (
        <div className="lg:w-[40%] w-full delimitation-blue lg:p-16 p-8 flex lg:flex-col md:flex-row flex-col justify-between lg:justify-start   lg:items-center">
            <div className="lg:w-full mb-12  md:w-[30%] w-full">
                <h3 className="text-logoBlue mb-2">Telephone</h3>
                <p className="text-logoOrange">1871871717</p>
            </div>

            <div className="lg:w-full mb-12 md:w-[30%] w-full">
                <h3 className="text-logoBlue mb-2">Adresse</h3>
                <p className="text-logoOrange">Adresse et localisation de lentreprise</p>
            </div>

            <div className="lg:w-full mb-12 md:w-[30%] w-full">
                <h3 className="text-logoBlue mb-2">Adresse email</h3>
                <p className="text-logoOrange">adresse@email.com</p>
            </div>
        </div>
    );
}


function ContactsForm(props){

    return (
        <form className=" lg:w-[60%] w-full delimitation-purple md:p-16 p-8 bg-logoBlue text-white lg:rounded-tr-lg lg:rounded-bl-none rounded-bl-lg rounded-br-lg">
            <h2 className="mb-6 text-logoOrange">Contactez-nous</h2>
            <p className="mb-8 text-lightGray">N'hésitez pas à nous contacter</p>
            <div className="flex flex-wrap delimitation-red md:flex-row flex-col justify-between">
                <input type="text" name="name" placeholder="Votre Nom" className=" focus:outline-none text-logoBlue delimitation-green rounded p-2 mb-8 md:w-[45%]"/>
                <input type="text" name="email" placeholder="Votre Email" className=" focus:outline-none text-logoBlue delimitation-green rounded  p-2 mb-8 md:w-[45%]"/>
                <input type="text" name="telephone" placeholder="Telephone" className=" focus:outline-none text-logoBlue delimitation-green rounded p-2 mb-8 md:w-[45%]"/>
                <input type="text" name="sujet" placeholder="Sujet" className=" focus:outline-none text-logoBlue delimitation-green rounded p-2 mb-8 md:w-[45%]"/>
            </div>
            <textarea name="message" placeholder="Message" className="focus:outline-none resize-none p-2 mb-4  text-logoBlue w-full h-[20vh] delimitation-green"></textarea>
            <input type="submit" className="bg-white text-logoBlue p-4 rounded-xl font-bold" value="Envoyer votre message"/>
        </form>
    );
}