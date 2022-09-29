import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Meta from "../../../components/meta";
import styles from "./index.module.css";

function Page() {
  const router = useRouter();
  const url = "https://framevr.io/rr-my-family";

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Meta
        title="Rodney Rinaldi Advogado"
        descrition="Minha família"
        image="https://adv.rodneyrinaldi.com/card.jpg"
        url="https://adv.rodneyrinaldi.com/forms/alimentos"
      />

      <a href="https://adv.rodneyrinaldi.com">
        <div className={styles.header}>
          <h1>Rodney Rinaldi</h1>{" "}
          <span>
            <strong>
              <i>ADVOGADO</i>
            </strong>
          </span>
        </div>
      </a>
      <div>
        <iframe
          id="iframeID"
          position="fixed"
          scrolling="no"
          overflow="hidden"
          src={url}
          width="100%"
          height="600px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          // sandbox=""
        >
          Carregando…
        </iframe>
      </div>
    </>
  );
}

export default Page;
