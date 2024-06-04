import Image from "next/image";

const SectionMain = () => {
  return (
    <div className="pt-6 px-6 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-12">
        <CompFocus />
        <CompStars />
      </div>

      <div className="flex flex-col justify-center items-center space-y-12">
        <Image
          src="/black-woman.png"
          alt="Vercel Logo"
          className="dark"
          width={368}
          height={551}
          priority
        />
      </div>

      <div className="flex flex-col justify-center items-center space-y-12">
        <CompActing />
        <CompContact />
      </div>
    </div>
  );
};

export default SectionMain;

const CompFocus = () => {
  return (
    <>
      <div className="max-w-64 max-sm:max-w-40 flex flex-col justify-center items-center">
        <div className="text-center">
          <Image
            src="/icon1advocacy.svg"
            alt="Sua advocacia"
            className=""
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="py-1 text-sm max-sm:text-xs font-bold max-sm:font-normal text-center text-red-900 max-sm:text-stone-950">
          Sua Voz em Primeiro Lugar
        </div>
        <div className="leading-4 max-sm:hidden text-center text-xs font-normal">
          Nosso compromisso em ouví-lo atentamente e considerar meticulosamente
          todas as suas necessidades para garantir a sua mais eficaz defesa
          jurídica.
        </div>
      </div>
    </>
  );
};

const CompActing = () => {
  return (
    <>
      <div className="max-w-64 max-sm:max-w-40 flex flex-col justify-center items-center">
        <div className="text-center">
          <Image
            src="/icon2performance.svg"
            alt="Sua advocacia"
            className=""
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="py-1 text-sm max-sm:text-xs font-bold max-sm:font-normal text-center text-red-900 max-sm:text-stone-950">
          Seu Atendimento Responsável
        </div>
        <div className="leading-4 max-sm:hidden text-center text-xs font-normal">
          Nosso atendimento personalizado e especializado, considera cada
          aspecto de sua necessidade tratado-a com a máxima responsabilidade e
          excelência jurídica.
        </div>
      </div>
    </>
  );
};

const CompStars = () => {
  return (
    <>
      <div className="max-w-64 max-sm:max-w-40 flex flex-col justify-center items-center">
        <div className="text-center">
          <Image
            src="/icon3testimonials.svg"
            alt="Sua advocacia"
            className=""
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="py-1 text-sm max-sm:text-xs font-bold max-sm:font-normal text-center text-red-900 max-sm:text-stone-950">
          A Voz dos Clientes Fala
        </div>
        <div className="leading-4 max-sm:hidden text-center text-xs font-normal">
          As experiências de quem já foi atendido.
        </div>
      </div>
    </>
  );
};

const CompContact = () => {
  return (
    <>
      <div className="max-w-64 max-sm:max-w-40 flex flex-col justify-center items-center">
        <div className="text-center">
          <Image
            src="/icon4contact.svg"
            alt="Sua advocacia"
            className=""
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="py-1 text-sm max-sm:text-xs font-bold max-sm:font-normal text-center text-red-900 max-sm:text-stone-950">
          Entre em Contato
        </div>
        <div className="leading-4 max-sm:hidden text-center text-xs font-normal">
          Marque uma conversa, tire suas dúvidas.
        </div>
      </div>
    </>
  );
};
