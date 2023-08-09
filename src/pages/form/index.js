import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Meta from "../../components/meta";
import styles from "./index.module.css";

function Page({ name }) {
  const router = useRouter();
  const url = "https://forms.office.com/r/" + getForm(name);

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
        descrition="Formulário de atendimento"
        image="https://adv.rodneyrinaldi.com/card.jpg"
        url="https://adv.rodneyrinaldi.com/form"
      />

      <div className={styles.header}>
        <h1>Rodney Rinaldi</h1>{" "}
        <span>
          <strong>
            <i>ADVOGADO</i>
          </strong>
        </span>
      </div>

      <div className={styles.main}>
        <h2>
          Formulário: <span>{name}</span>
        </h2>

        <input
          value="RESPONDER"
          className={styles.goForward}
          onClick={() => router.push(url)}
        />
      </div>
    </>
  );
}

Page.getInitialProps = async ({ query }) => {
  const { name } = query;

  return { name };
};

export function getForm(name) {
  let ret = "VTxxF97D0J"; // contato geral
  if (name == "pesquisa-advocacia") ret = "FRfME5vAEV"; // pesquisa mercado advocacia
  if (name == "alimentos") ret = "zA7WevPV0r"; // alimentos
  if (name == "execucao-alimentos") ret = "eqHg8PJ9KU"; // alimentos execucao
  if (name == "bancario") ret = "TdDGFDkFPP"; // bancario
  if (name == "consumidor") ret = "9QFcBv2dTi"; // consumidor
  if (name == "inventario") ret = "byyStRGDcb"; // inventario
  if (name == "abertura-inventario") ret = "SYCH4rCiAC"; // inventario abertura
  if (name == "declaracoes-inventario") ret = "pmmWjP9NmP"; // inventario declaracoes
  if (name == "pesquisa") ret = "WF6j3N1v76"; // pesquisa
  if (name == "guarda-visitas-alimentos") ret = "TqvzwwXASK"; // guarda visitas e alimentos

  return ret;
}

export default Page;
