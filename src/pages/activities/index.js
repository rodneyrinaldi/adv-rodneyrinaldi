import React from "react";

import Layout from "../../components/layout";
import MenuItem from "../../components/menuitem";
import Title from "../../components/title";

import styles from "./index.module.css";

function Activities() {
  return (
    <>
      <Layout showback="yes">
        <Title title="ATIVIDADES" />
        <div className={styles.row}>
          <MenuItem
            url="/document/?title=Atividades Imobiliárias"
            alt="Imobiliário"
            pic="/areas/activities/housing.png"
            title="Atividades Imobiliárias"
            description="Elaboração ou análise de contratos para obras ou imóveis. Compra e venda ou aluguel. Contratação de serviços ou reformas."
          />

          <MenuItem
            url="/document/?title=Ações de Família"
            alt=""
            pic="/areas/processes/family.png"
            title="Atividades de Família"
            description="Contratos de união estável, de dissolução de união estável, pré nupcial e etc. Inventários, partilhas, testamentos e holding familiar."
          />

          <MenuItem
            type={true}
            url="/message"
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
