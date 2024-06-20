"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import CTAButton from "../layout/CTAButton";
import WAButton from "../layout/WAButton";

interface SectionProps {
  imageName: string;
  titleText: string;
  subtitleText: string;
}
const Area: React.FC<SectionProps> = ({
  imageName,
  titleText,
  subtitleText,
}) => {
  return (
    <>
      <div className="max-w-64 max-sm:max-w-40 flex flex-col justify-center items-center">
        <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] text-center">
          <Image
            src={imageName}
            alt="Sua advocacia"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="pt-2 pb-1 font-sans text-xs sm:text-base font-normal sm:font-bold text-center text-red-900 max-sm:text-stone-950">
          {titleText}
        </div>
        <div className="leading-4 max-sm:hidden text-center text-xs font-normal">
          {subtitleText}
        </div>
      </div>
    </>
  );
};

const Fold1Main = () => {
  const handleClick = () => {
    alert("CTA Button Clicked!");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pt-2 px-6 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-32 max-sm:space-y-8">
          <Area
            imageName="/icons/focus.svg"
            titleText="acolhimento"
            subtitleText="Nosso compromisso em ouví-lo atentamente e considerar meticulosamente todas as suas necessidades para garantir a sua mais eficaz defesa jurídica."
          />
          <Area
            imageName="/icons/stars.svg"
            titleText="humanização"
            subtitleText="As experiências de quem já foi atendido."
          />
        </div>

        <div className="flex flex-col justify-center items-center space-y-0 max-sm:space-y-0">
          <Image
            src="/images/black-woman.png"
            alt="Vercel Logo"
            className="dark"
            width={368}
            height={551}
            priority
          />
        </div>

        <div className="flex flex-col justify-center items-center space-y-32 max-sm:space-y-8">
          <Area
            imageName="/icons/acting.svg"
            titleText="responsabilidade"
            subtitleText="Nosso atendimento personalizado e especializado, considera cada
          aspecto de sua necessidade tratado-a com a máxima responsabilidade e
          excelência jurídica."
          />
          <Area
            imageName="/icons/contact.svg"
            titleText="comunicação"
            subtitleText="Marque uma conversa, tire suas dúvidas."
          />
        </div>
      </div>

      <div className="mt-[-10px] pt-2 px-6 flex justify-center items-center">
        <WAButton />
      </div>
    </div>
  );
};

export default Fold1Main;
