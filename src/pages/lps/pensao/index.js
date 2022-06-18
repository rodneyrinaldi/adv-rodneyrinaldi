import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
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

      <div className={styles.header}></div>

      <div name="emailLayer" id="emailLayer" className={styles.layerdark}>
        <iframe
          scrolling="no"
          overflow="hidden"
          src={url}
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Carregando…
        </iframe>
      </div>

      <div className={styles.footer}></div>
    </>
  );
}

export default Page;
