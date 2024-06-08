import Image from "next/image";

const Fold9Footer = () => {
  return (
    <div className="pt-8 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/logoadv.png"
          alt="Rodney Rinaldi Logo"
          width={300}
          height={72}
          priority
        />
      </div>
    </div>
  );
};

export default Fold9Footer;
