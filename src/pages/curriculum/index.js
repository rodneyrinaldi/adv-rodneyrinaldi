import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from './index.module.css'

export default function Curriculum() {
  return (
    <Layout showback='yes'>
      <Title title="CURRICULUM VITAE" />

      <div id='toppage' className={styles.container}>

        {/* <div className={styles.line}>
          <h1><strong>Rodney Rinaldi Tonelli</strong></h1>
        </div> */}

        <div className={styles.line}>
          <div className={styles.colL}>
            {/* <div>r. Lauzane 823 1B, SP</div> */}
            <div>github.com/rodneyrinaldi</div>
            <div>linkedin.com/in/rodneyrinaldi</div>
          </div>
          <div className={styles.colR}>
            <div>11 98141.7040</div>
            <div>rodneyrinaldi.com</div>
            <div>rodney@rodneyrinaldi.com</div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div><strong>OBJETIVO</strong></div>
          </div>
          <div className={styles.col2}>
            <div><strong>Arquitetura e desenvolvimento de sistemas</strong></div>
            {/* <div>Developer</div> */}
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div><strong>COMPETÊNCIA</strong></div>
          </div>
          <div className={styles.col2}>
            <div><strong className={styles.col2e}>
              SOFTWARE ARCHITECTURE, .NET, JAVASCRIPT, NODE, REACT,
              DATABASE ORACLE, SQLSERVER, POSTGRES, MONGO, REDIS, DATA ANALYSIS, BI, DW,
              CRM DYNAMICS, SALESFORCE,  PLUSOFT,
              PROJECT MANAGEMENT, SCRUM, PMBOK
            </strong></div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div><strong>PERFIL</strong></div>
          </div>
          <div className={styles.col2}>
            <div>Gerenciamento, arquitetura e desenvolvimento de grandes projetos
              para os segmentos industrial farmacêutico e de consumo; plataformas .NET,
              Javascript, Node, React; bancos de dados Oracle, SqlServer, Postgres, MongoDb e
              Redis; data warehouse e business intelligence; CRM Microsoft, Plusoft e Salesforce.</div>
            <div>Trabalho em equipe, transações complexas, integrações e treinamentos.</div>
            <div>Certificação Microsoft e Plusoft Customer Relationship Management.</div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div><strong>FORMAÇÃO</strong></div>
          </div>
          <div className={styles.col2}>
            <div><strong>Pós Gestão de Projetos e Portfólios</strong> Universidade Anhembi Morumbi, 2018 </div>
            <div><strong>Especialização</strong> Business Intelligence FMU 2015</div>
            <div><strong>MBA Gestão de Negócios Estratégicos</strong> Universidade Anhanguera, 2014</div>
            <div><strong>Engenharia</strong> Univ. Santa Cecília dos Bandeirantes, UNICEB 1992</div>
            <div><strong>Pós Direito Constitucional</strong> Faculdade Legale, 2021</div>
            <div><strong>Pós Direito Processual Civil</strong> Escola Paulista de Direito, EPD 2017</div>
            <div><strong>Pós Direito Digital</strong> Faculdades Metropolitanas Unidas, FMU 2016</div>
            <div><strong>Direito</strong> Universidade Bandeirante, UNIBAN 2011 </div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div><strong>HISTÓRICO</strong></div>
          </div>
          <div className={styles.col2}>
            <div><strong>Direta Consultoria – Arquiteto e líder de projetos, 14 anos e 11 meses.</strong></div>
            <div>Arquiteto e desenvolvedor do sistema de atendimento a clientes para Merck Sharp & Dhome para o Brasil, México, Chile e Argentina. Arquiteto e desenvolvedor contact center para Pepsico Brasil, Bristol Myers e Byk-Altana Farma. Arquiteto das interfaces do contact center com a força de vendas e faturamento para Merck Sharp e e-Pharma, Merck Sharp e Pluris Mídia. Arquiteto e desenvolvedor do sistema de provas para o  departamentos de Residência Medica e Produção Científica para a Faculdade de Medicina de São Paulo. Administrador dos bancos de dados Oracle para Hilton Hotéis, Serma Assistência Médica, Spread Teleinformática, Medcard Saúde e São Roque Internet.</div>
            <div><strong>Bayer – Customer Service Coordinator CRM e BI, 5 anos e 11 meses.</strong></div>
            <div>Local Process Owner Salesforce Project Brasil, responsável pela documentação técnica local, suporte, treinamento e interface com a global na Alemanha. Desenvolvimento do Data Warehouse e Business Intelligence do Contact Center, responsável pelo desenvolvimento e gestão da central de atendimento de serviços veterinários utilizando o sistema SAP CRM. </div>
            <div><strong>Plusoft Informática</strong> – Gerente de Projetos e CRM, 10 anos e 2 meses.</div>
            <div>Arquiteto e desenvolvedor: Líder de desenvolvimento da aplicação para contacts centers. Líder integrador das plataformas e-Pharma de farmácias com ERP JDE e CRM. Gerente de contas Papeis Melhoramentos, Lilly, Davene, Wyeth, Faber-Castell, Bristol, Byk-Altana, Boehringer, Asta Médica, Saralee Cafés, Unilever Bestfoods, Banco Mercantil Finasa, Merck Sharp Dome, Elma Chips Pepsico, Nestlé, Icatu-Hartford, K+F distribuidora, Philip Morris, Kraft, Kibon, Alcon Laboratório, União Coopersucar, Janssen-Cilag, EAN Brasil, BrasilPrev, Sanofi, Baushlomb, Merck, Nestlé, Arisco, Batavia e Mallory eletrodomésticos.</div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div><strong>IDIOMAS</strong></div>
          </div>
          <div className={styles.col2}>
            <div className={styles.bullets}>
              <div>Inglês&nbsp;&nbsp;</div><div /><div /><div /><div /><div /><div /><div /><div /><div />
            </div>
            <div className={styles.bullets}>
              <div>Espanhol&nbsp;&nbsp;</div><div /><div /><div /><div /><div /><div /><div /><div /><div />
            </div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div><strong>PROJETOS</strong></div>
          </div>
          <div className={styles.col2}>
            <div><strong>Vivência internacional</strong>, implantação do Plusoft CRM para a Merck Sharp & Dhome nas filiais Chile em 2002, México em 2004, Brasil em 2005 e Argentina em 2006, e o SalesForce CRM para Bayer Brasil na Alemanha em 2015.</div>
            <div><strong>Desenvolvimento de produto</strong>, projeto, arquitetura e desenvolvimento de solução de CRM e Contact Center clientes/consumidores especializada para a indústria farmacêutica.</div>
            <div><strong>Desenvolvimento de mercado</strong>, nicho indústria farmacêutica, nacionais e multinacionais, com crescimento de 1.100%, elevando de uma conta para doze contas em cinco anos.</div>
            <div><strong>Gerenciamento de crise</strong>, desenvolvimento sistêmico e tratativas de segurança da informação com diretoria, interface com a ANVISA e departamentos jurídicos, episódios dos recalls dos produtos Vioxx/Arcoxia pela Merck Sharp em 2004 e do produto Microvilar pela Schering em 1998 no caso da pílula de farinha.</div>
            <div><strong>Migração de sistema</strong>, atendimento ao consumidor e clientes do contact center veterinário da Bayer, substituição do sistema Orbium pelo o SAP CRM e posteriormente este pelo SalesForce.</div>
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.col1}>
            <div><strong>FILOSOFIA</strong></div>
          </div>
          <div className={styles.col2}>
            <div><i>... devemos valorizar o homem mais pelas perguntas que pelas respostas, Voltaire</i></div>
          </div>
        </div>

      </div>
    </Layout>
  )
}
