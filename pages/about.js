import {PresentationSection} from "@/components/About/PresentationSection";
import {TeamSection} from "@/components/About/TeamSection";
import {PartenaireSection} from "@/components/About/PartenaireSection";


export default function About(props){

    return (
        <main>
            <PresentationSection/>
            <TeamSection/>
            <PartenaireSection/>
        </main>
    );
}