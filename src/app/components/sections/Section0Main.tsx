import Image from "next/image";

const Section0Main = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex justify-center items-top space-x-4 max-sm:space-x-1">
          <div className="flex flex-col items-center space-y-4 max-sm:space-y-2">
            <div className="w-80 h-60 max-sm:w-20 max-sm:h-15 flex flex-col justify-center items-center">
              <p className="mb-4 border">
                <Image
                  src="/icon1advocacy.svg"
                  alt="Sua advocacia"
                  className=""
                  width={30}
                  height={30}
                  priority
                />
              </p>
              <p className="text-sm font-bold text-center text-red-900 max-sm:text-wrap max-sm:w-24">
                Sua Voz em Primeiro Lugar
              </p>
              <p className="max-sm:hidden mt-2 text-xs font-normal text-center">
                Nosso compromisso em ouví-lo atentamente e considerar
                meticulosamente todas as suas necessidades para garantir a sua
                mais eficaz defesa jurídica.
              </p>
            </div>

            <div className="w-80 h-60 max-sm:w-20 max-sm:h-15 flex flex-col justify-center items-center">
              <p className="mb-4">
                <Image
                  src="/icon3testimonials.svg"
                  alt="Testimoniais"
                  className="dark"
                  width={30}
                  height={30}
                  priority
                />
              </p>

              <p className="text-sm font-bold text-center text-red-900 max-sm:text-wrap max-sm:w-24">
                A Voz dos Clientes Fala
              </p>
              <p className="max-sm:hidden mt-2 text-xs font-normal text-center">
                As experiências reais de quem já foi atendido.
              </p>
            </div>
          </div>

          <div className="w-80 h-60">
            <Image
              src="/black-woman.png"
              alt="Vercel Logo"
              className="dark"
              width={368}
              height={551}
              priority
            />
          </div>

          <div className="flex flex-col items-center space-y-4 max-sm:space-y-2">
            <div className="w-80 h-60 max-sm:w-20 max-sm:h-15 flex flex-col justify-center items-center">
              <p className="mb-4">
                <Image
                  src="/icon2performance.svg"
                  alt="Atuação"
                  className="dark"
                  width={30}
                  height={30}
                  priority
                />
              </p>
              <p className="text-sm font-bold text-center text-red-900 max-sm:text-wrap max-sm:w-24">
                Seu Atendimento Responsável
              </p>
              <p className="max-sm:hidden mt-2 text-xs font-normal text-center">
                Nosso atendimento personalizado e especializado, considera cada
                aspecto de sua necessidade tratado-a com a máxima
                responsabilidade e excelência jurídica.
              </p>
            </div>

            <div className="w-80 h-60 max-sm:w-20 max-sm:h-15 flex flex-col justify-center items-center">
              <p className="mb-4">
                <Image
                  src="/icon4contact.svg"
                  alt="Contato"
                  className="dark"
                  width={30}
                  height={30}
                  priority
                />
              </p>

              <p className="text-sm font-bold text-center text-red-900">
                Entre em Contato
              </p>
              <p className="max-sm:hidden mt-2 text-xs font-normal text-center">
                Marque uma conversa, tire suas dúvidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section0Main;
