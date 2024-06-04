import Image from "next/image";
import Section2Advocacy from "./components/sections/Section2Advocacy";
import Section3Performance from "./components/sections/Section3Performance";
import Section4Testimonials from "./components/sections/Section4Testimonials";
import Section5Contact from "./components/sections/Section5Contact";
import Section1Header from "./components/sections/Section1Header";
import Section6Footer from "./components/sections/Section6Footer";
import Section0Main from "./components/sections/Section0Main";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Section1Header />
        <Section0Main />
        <Section2Advocacy />
        <Section3Performance />
        <Section4Testimonials />
        <Section5Contact />
        <Section6Footer />
      </div>
    </div>
  );
};
