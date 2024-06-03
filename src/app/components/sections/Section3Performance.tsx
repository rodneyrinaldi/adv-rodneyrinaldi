import Image from "next/image";

const Section3Performance = () => {
  return (
    <div className="min-h-28 w-full py-8 flex flex-col justify-center items-center border border-white">
      <div className="h-full w-full flex justify-center items-center border border-white">
        <p className="border border-white">Atuação</p>
      </div>

      <div className="w-full py-6 flex justify-center items-center border border-white">
        <div className="h-full w-7/10 flex flex-col justify-center items-center border border-white">
          <p className="border border-white">
            Atendimento Jurídico Completo para Todas as Suas Necessidades
          </p>
          <p className="border border-white">
            Direito Civil, Trabalhista e Penal com Foco em Você
          </p>
          <p className="border border-white">
            Independente da sua necessidade jurídica, estamos aqui para oferecer
            suporte integral e personalizado. Com nossa abordagem centrada no
            cliente, oferecemos:
          </p>
          <p className="border border-white">
            • Direito Civil: Resolução de conflitos e defesa de interesses
            pessoais e patrimoniais. • Direito Trabalhista: Garantia de que seus
            direitos no ambiente de trabalho sejam respeitados. • Direito Penal:
            Defesa sólida e estratégica para proteger sua liberdade e direitos.
          </p>
          <p className="border border-white">
            Nossa equipe experiente e dedicada está pronta para escutar você,
            entender suas necessidades e oferecer a melhor solução jurídica,
            seja qual for a área do direito. Porque o mais importante é garantir
            que você tenha o suporte necessário em qualquer situação.
          </p>
        </div>
        <div className="h-full w-7/10 flex border border-white">
          <div className="w-3/10 flex justify-center items-center border border-white">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3Performance;
