import React from "react";
import Layout from "../../components/layout";
import MenuItem from "../../components/menuitem";
import Title from "../../components/title";
import styles from "./index.module.css";

function Processes() {
  return (
    <>
      <Layout showback="yes">
        <Title title="PROCESSOS" />
        <div className={styles.row}>
          <MenuItem
            url="/document/?title=Ações de Privacidade"
            alt="Privacidade"
            pic="/areas/processes/privacy.png"
            title="Ações de Privacidade"
            description="Invasão de privacidade, defesa de direitos da personalidade, notificação de autoridades."
          />

          <MenuItem
            url="/document/?title=Ações de Família"
            alt=""
            pic="/areas/processes/family.png"
            title="Ações de Família"
            description="Questões familiares como uniões, separações, sucessões, inventários e testamentos."
          />

          <MenuItem
            url="/document/?title=Ações de Consumo"
            alt="Consumidor"
            pic="/areas/processes/consume.png"
            title="Ações de Consumo"
            description="Problemas referentes a compras de produtos ou serviços em lojas físicas ou na internet."
          />

          <MenuItem
            url="/document/?title=Ações de Serviços"
            alt="Serviços"
            pic="/areas/processes/services.png"
            title="Ações de Serviços"
            description="Problemas com contratos de serviços em geral como telefonia, internet, escolares, médicas e etc."
          />

          <MenuItem
            url="/document/?title=Ações Médicas"
            alt="Medical"
            pic="/areas/processes/medical.png"
            title="Ações Médicas"
            description="Problemas com planos de saúde, com hospitais, com laboratórios e ou erros médicos."
          />

          <MenuItem
            url="/document/?title=Ações Imobiliárias"
            alt="Imobiliário"
            pic="/areas/processes/housing.png"
            title="Ações Imobiliárias"
            description="Imóveis na planta, novos ou usados. Compra, venda e locação residencial ou comercial."
          />

          <MenuItem
            url="/document/?title=Ações de Trânsito"
            alt="Trânsito"
            pic="/areas/processes/traffic.png"
            title="Ações de Trânsito"
            description="Suspensões, cassações e crimes de trânsito. Defesas prévias e recursos de multas no JARI e CETRAN."
          />

          <MenuItem
            url="/document/?title=Ações Trabalhistas"
            alt="Trabalhista"
            pic="/areas/processes/labor.png"
            title="Ações Trabalhistas"
            description="Contratações, demissões, cálculos e indenizações. Assédio comercial e sexual ou discriminação."
          />

          <MenuItem
            url="/document/?title=Ações Previdenciárias"
            alt="Previdenciário"
            pic="/areas/processes/pension.png"
            title="Ações Previdenciárias"
            description="Processos administrativo ou judicial, simulações, cálculos e recursos."
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

export default Processes;
