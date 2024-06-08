import Image from "next/image";

const Fold1Main = () => {
  return (
    <div className="pt-6 px-6 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-32 max-sm:space-y-8">
        <CompFocus />
        <CompStars />
      </div>

      <div className="flex flex-col justify-center items-center space-y-32 max-sm:space-y-8">
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
        <CompActing />
        <CompContact />
      </div>
    </div>
  );
};

export default Fold1Main;

const isMobileDevice = () => {
  const screenWidth = window.innerWidth;
  const isMobileWidth = screenWidth < 640;
  return isMobileWidth;
};

const CompFocus = () => {
  const lenght = window.screen.width < 640;
  return (
    <>
      <div className="max-w-64 max-sm:max-w-40 flex flex-col justify-center items-center">
        <div className="text-center">
          <Image
            src="/icons/focus.svg"
            alt="Sua advocacia"
            className="mb-2"
            width={(isMobileDevice()?20:30)}
            height={30}
            priority
          />
        </div>
        <div className="py-1 text-sm max-sm:text-xs font-bold max-sm:font-normal text-center text-red-900 max-sm:text-stone-950">
          Você em Primeiro Plano!
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
            src="/icons/acting.svg"
            alt="Sua advocacia"
            className="mb-2"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="py-1 text-sm max-sm:text-xs font-bold max-sm:font-normal text-center text-red-900 max-sm:text-stone-950">
          Atendimento Responsável
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
            src="/icons/stars.svg"
            alt="Sua advocacia"
            className="mb-2"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="py-1 text-sm max-sm:text-xs font-bold max-sm:font-normal text-center text-red-900 max-sm:text-stone-950">
          Opiniões dos clientes
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
            src="/icons/contact.svg"
            alt="Sua advocacia"
            className="mb-2"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="py-1 text-sm max-sm:text-xs font-bold max-sm:font-normal text-center text-red-900 max-sm:text-stone-950">
          Canal de comunicação
        </div>
        <div className="leading-4 max-sm:hidden text-center text-xs font-normal">
          Marque uma conversa, tire suas dúvidas.
        </div>
      </div>
    </>
  );
};
