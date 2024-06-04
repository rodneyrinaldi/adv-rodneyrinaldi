import Image from "next/image";

const Section6Footer = () => {
  return (
    <div className="min-h-64 w-full flex justify-center items-center border">
      <div className="h-full w-7/10 flex flex-col border">
        <div className="w-3/10 flex justify-center items-center border">
          <Image
            src="/logoadv.png"
            alt="Rodney Rinaldi Logo"
            width={100}
            height={24}
            priority
          />
        </div>
        <div className="w-7/10 flex flex-col justify-center items-center border">
          <p className="border">Rodney Rinaldi Advogado</p>
        </div>
      </div>
    </div>
  );
};

export default Section6Footer;
