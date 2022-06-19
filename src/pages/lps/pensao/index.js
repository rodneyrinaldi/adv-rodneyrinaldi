import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import image1 from "../../../../public/lps/pensao/image1.png";
import image2 from "../../../../public/lps/pensao/image2.png";
import image3 from "../../../../public/lps/pensao/image3.png";
import image4 from "../../../../public/lps/pensao/image4.png";
import Meta from "../../../components/meta";
import styles from "./index.module.css";

function Page() {
  const router = useRouter();
  const msg =
    "estou interessado em receber orientações assunto de pensão alimentícia, obrigado.";
  const wapp =
    "https://api.whatsapp.com/send?phone=+5511981417040&text=Olá, " + msg;
  const url = "https://forms.office.com/r/SYCH4rCiAC";

  function showUp() {
    openImage();
  }
  function openImage() {}

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Meta
        title="Rodney Rinaldi Advogado"
        descrition="Pensão alimentícia"
        image="https://adv.rodneyrinaldi.com/lps/pensao/card.jpg"
        url="https://adv.rodneyrinaldi.com/lps/pensao"
      />

      <div className={styles.header}>xxxxxxxx</div>

      <div>
        <div>
          <div>xxxxxxxx</div>
          <div className={styles.imgService}>
            <Image alt="" src={image1} layout="responsive" objectFit="fill" />
          </div>
        </div>

        <div>Cobranças de pensões atrasadas</div>
        <div className={styles.wrapperBody}>
          <div className={styles.imgsTypes}>
            <Image alt="" src={image2} layout="responsive" objectFit="fill" />
            <div>Prisão</div>
            <div>
              Cobrança com pedido de prisão para as 3 últimas pensões não pagas
            </div>
          </div>
          <div className={styles.imgsTypes}>
            <Image alt="" src={image3} layout="responsive" objectFit="fill" />
            <div>Expropriação</div>
            <div>
              Cobrança com protesto para totalidade das pensões não pagas
            </div>
          </div>
          <div className={styles.imgsTypes}>
            <Image alt="" src={image4} layout="responsive" objectFit="fill" />
            <div>Revisional</div>
            <div>
              Pedido de revisão da pensão de acordo com nova situação da criança
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrapperIframe}>
        <div className={styles.layerIframe}>
          <iframe
            position="fixed"
            scrolling="no"
            overflow="hidden"
            src={url}
            width="100%"
            height="1200px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Carregando…
          </iframe>
        </div>
      </div>

      <div className={styles.footer}>xxxxxx</div>
    </>
  );
}

export default Page;
