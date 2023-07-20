import Image from 'next/image';
import {HeroSection} from "@/components/Home/HeroSection";
import {ProjectsSection} from "@/components/Home/ProjectsSection";
import {ServicesSection} from "@/components/Home/ServicesSection";
import {ContactsSection} from "@/components/Home/ContactsSection";


export default function Home() {
   
  return (
    <main>
      <HeroSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <ContactsSection/>
    </main>
  );
}
