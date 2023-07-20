import Link from "next/link";

export function ContactsSection(props)
{
    return (
        <div className="xl:px-[140px] md:px-8 px-4 w-full h-[700px] flex justify-center items-center delimitation-green text-white">
            <div className="lg:w-[60%] lg:h-[60%] md:w-[80%] md:h-[60%] delimitation-red bg-logoOrange flex flex-col  items-center lg:p-14 md:p-8 p-2 py-12">
                <h2 className="text-white mb-10">Demande de devis</h2>
                <p className="lg:w-[70%] md:w-[90%] w-[80%] mb-8">Faites-nous part de votre projets ou toute question que vous avez via notre formulaire.
                    Nous vous reviendrons dans les meilleurs délai afin de discuter.
                </p>
                <Link href="/contacts">
                    <button className="rounded-lg bg-white text-logoOrange p-4  font-bold">Contactez-nous</button>
                </Link>
            </div>
        </div>
    );
}