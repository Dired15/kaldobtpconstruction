import Image from "next/image";
import Link from "next/link";

export function HeroSection(props){

    return(
        <div className=" w-full h-[800px]  delimitation-red bg-cover bg-no-repeat bg-[url('/heroImage.jpg')] relative">
            <div className="xl:px-[140px] md:px-8 px-4 bg-[hsla(0,0%,0%,70%)] flex justify-center md:justify-start items-center  w-full h-full delimitation-purple">
                <div className="flex flex-col xl:ml-28 justify-center delimitation-purple h-[70%] md:w-[80%] w-[90%] text-white">
                    <h1 className="mb-14 font-bold text-logoBlue">Kaldo BTP Construction</h1>
                    <p className="mb-10 text-justify md:w-[500px] w-[300px]">Nous oeuvrons depuis maintenant plus de 10 ans dans le secteur du BTP et notre expertise nous a permis de
                        mener à bien de nombreux projets,tant dans le secteur publique que privée. Les services que nous offrons sont diversifiés et
                        travailler avec nous, c'est l'assurance de voir votre projet ètre réaliser avec succès.
                    </p>
                    <Link href="/about">
                        <button className="bg-white text-black rounded-lg font-bold w-fit p-3">En savoir plus</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}