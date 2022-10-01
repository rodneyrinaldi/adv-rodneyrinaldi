import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Meta from "../../../components/meta";
import styles from "./index.module.css";

function Page() {
  const router = useRouter();
  const url = "https://forms.office.com/r/WF6j3N1v76";

  useEffect(() => {
    // var iframe = document.getElementById("iframeID");
    // iframe.addEventListener("mouseup", Handler);
    // function Handler() {
    //   alert("works");
    // }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Meta
        title="Rodney Rinaldi Advogado"
        descrition="Pesquisa de satisfação"
        image="https://adv.rodneyrinaldi.com/card.jpg"
        url="https://adv.rodneyrinaldi.com/forms/alimentos"
      />

      <a href="https://forms.office.com/r/WF6j3N1v76">
        <div className={styles.header}>
          <h1>Rodney Rinaldi</h1>{" "}
          <span>
            <strong>
              <i>ADVOGADO</i>
            </strong>
          </span>
        </div>
      </a>

      <div className={styles.main}>
        <h3>
          <strong>PESQUISA DE SATISFAÇÃO</strong>
        </h3>

        <div className={styles.wrapperIframe}>
          <div className={styles.layerIframe}>
            <iframe
              id="iframeID"
              position="fixed"
              scrolling="no"
              overflow="hidden"
              src={url}
              width="100%"
              height="2000px"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              // sandbox=""
            >
              Carregando…
            </iframe>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerCols}>
          <a href="https://adv.rodneyrinaldi.com">adv.rodneyrinaldi.com</a>
          <h6> | </h6>
          <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
        </div>
        <div className={styles.footerCols}>
          <p>Travessa Dona Paula 13 Higienópolis São Paulo SP (11) 3164-6843</p>
        </div>
      </div>
    </>
  );
}

export default Page;
