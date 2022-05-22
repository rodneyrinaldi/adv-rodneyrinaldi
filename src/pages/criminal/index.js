import React from "react";
import Layout from "../../components/layout";
import MenuItem from "../../components/menuitem";
import Title from "../../components/title";
import styles from "./index.module.css";

function Activities() {
  return (
    <>
      <Layout showback="yes">
        <Title title="CRIMINAL" />
        <div className={styles.row}>
          <MenuItem
            url="/document/?title=Processo Criminal de Trânsito"
            alt="Processo Criminal de Trânsito"
            pic="/areas/processes/traffic.png"
            title="Processo Criminal de Trânsito"
            description="Crimes de trânsito como o homicídio, a lesão corporal ou para os casos de desrespeito a sançãoes previamente administrativas."
          />

          <MenuItem
            url="/document/?title=Assistência de Acusação"
            alt="Assistência de Acusação"
            pic="/areas/criminal/jail.png"
            title="Assistência de Acusação"
            description="Assistência de acusção para proteção da adequada execução penal no caso concreto, resguardando aplicabiliade constitucional."
          />

          <MenuItem
            type={true}
            url="/contactus"
            alt="contate-nos"
            pic="/areas/contactus.png"
            title="Entre em Contato"
            description="Não encontrou o que procurava, envie uma mensagem e será atendido em até 24 horas."
          />
        </div>
      </Layout>
    </>
  );
}

export default Activities;
