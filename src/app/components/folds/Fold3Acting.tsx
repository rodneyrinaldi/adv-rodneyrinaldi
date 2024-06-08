"use client";

import CTAButton from "../layout/CTAButton";import Image from "next/image";

const Fold3Acting = () => {
  const handleClick = () => {
    alert("CTA Button Clicked!");
  };
  return (
    <div className="w-screen py-16 max-sm:py-8 px-40 max-sm:px-6 flex justify-center items-center">
      <div className="max-w-80 max-sm:max-w-20 flex flex-col justify-center items-center space-y-12">
        <Image
          src="/worried-man.png"
          alt="menu logo"
          className="dark"
          width={640}
          height={825}
          priority
        />
      </div>

      <div className="pl-20 max-sm:pl-4 flex flex-col justify-center items-center space-y-2">
        <p className="max-w-96 text-xl max-sm:text-xs font-bold text-center">
          Atendimento Jurídico Completo para Todas as Suas Necessidades
        </p>
        <p className="max-w-96 pt-8 max-sm:pt-4 text-2xl max-sm:text-xs font-bold text-center">
          Direito Civil, Trabalhista e Penal com Foco em Você
        </p>
        <p className="max-w-96 pt-4 max-sm:pt-2 text-xl max-sm:text-xs text-center">
          Independente da sua necessidade jurídica, estamos aqui para oferecer
          suporte integral e personalizado. Com nossa abordagem centrada no
          cliente, oferecemos:
        </p>
        <p className="border">
          • Direito Civil: Resolução de conflitos e defesa de interesses
          pessoais e patrimoniais. • Direito Trabalhista: Garantia de que seus
          direitos no ambiente de trabalho sejam respeitados. • Direito Penal:
          Defesa sólida e estratégica para proteger sua liberdade e direitos.
        </p>
        <p className="border">
          Nossa equipe experiente e dedicada está pronta para escutar você,
          entender suas necessidades e oferecer a melhor solução jurídica, seja
          qual for a área do direito. Porque o mais importante é garantir que
          você tenha o suporte necessário em qualquer situação.
        </p>
        <p className="max-w-96 pt-4 max-sm:pt-2 text-xl max-sm:text-xs text-center">
          <CTAButton text="Fale com um advogado" onClick={handleClick} />
        </p>
      </div>
    </div>
  );
};

export default Fold3Acting;
