import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import image1 from "../../../../public/lps/pensao/image1.png";
import image2 from "../../../../public/lps/pensao/image2.png";
import image3 from "../../../../public/lps/pensao/image3.png";
import image4 from "../../../../public/lps/pensao/image4.png";
import logo1 from "../../../../public/lps/pensao/logo.png";
import logo2 from "../../../../public/lps/pensao/logodev.ico";
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

      <div className={styles.header}>
        <Image alt="" src={logo1} width="30" height="30" />
        <h1>Rodney Rinaldi</h1> <span>ADVOGADO</span>
      </div>

      <div>
        <div className={styles.line1}>
          <div className={styles.line1Cols}>
            <h3>Pensão alimentícia</h3>
            <h5>
              Os pagamentos <span>estão atrasados</span>, está com difi-culdades
              com a manutenção dos filhos?
            </h5>
            <h5>
              <span>Não foi atendida</span> pelos critérios da Defensoria
              Pública, mas continua com a necessidade?
            </h5>
            <h5>
              <span>Está precisando falar com um advogado</span> que atenda por
              um valor justo e que consiga negoci-ar a forma e o prazo para
              pagamento?
            </h5>
            <h5>
              Transforme sua preocupação em ação corretiva ao seu alcance!{" "}
            </h5>
            <h5>
              <span>Entre em contato sem compromisso</span>.
            </h5>
            <h5>
              <a href="https://adv.rodneyrinaldi.com">
                https://adv.rodneyrinaldi.com/contactus
              </a>
            </h5>
          </div>
          <div className={styles.line1Img}>
            <Image alt="" src={image1} layout="responsive" objectFit="fill" />
          </div>
        </div>

        <div className={styles.line2}>
          <h3>
            <strong>Cobranças de pensões atrasadas</strong>
          </h3>
        </div>

        <div className={styles.line3}>
          <div className={styles.line3Cols}>
            <div className={styles.line3Img}>
              <Image alt="" src={image2} layout="responsive" objectFit="fill" />
            </div>
            <h3>PRISÃO</h3>
            <h5>
              Cobrança com pedido de prisão para as 3 últimas pensões não pagas
            </h5>
          </div>

          <div className={styles.line3Cols}>
            <div className={styles.line3Img}>
              <Image alt="" src={image3} layout="responsive" objectFit="fill" />
            </div>
            <h3>PATRIMÔNIO</h3>
            <h5>Cobrança com protesto para totalidade das pensões não pagas</h5>
          </div>

          <div className={styles.line3Cols}>
            <div className={styles.line3Img}>
              <Image alt="" src={image4} layout="responsive" objectFit="fill" />
            </div>
            <h3>REVISÃO</h3>
            <h5>
              Pedido de revisão da pensão de acordo com nova situação da criança
            </h5>
          </div>
        </div>
      </div>

      <div className={styles.line4}>
        <h3>
          <strong>Envie seus dados para ser contatado</strong>
        </h3>
      </div>

      <div className={styles.wrapperIframe}>
        <div className={styles.layerIframe}>
          <iframe
            position="fixed"
            scrolling="no"
            overflow="hidden"
            src={url}
            width="90%"
            height="1200px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Carregando…
          </iframe>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerCols}>
          <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
          <a href="https://rodneyrinaldi.com">
            <Image alt="" src={logo2} width="30" height="30" />
          </a>
          <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
        </div>
        <div className={styles.footerCols}>
          <p>Travessa Dona Paula 13 Higienópolis São Paulo SP (11) 3164-6843</p>
        </div>
      </div>
    </>
  );
}

export default Page;
