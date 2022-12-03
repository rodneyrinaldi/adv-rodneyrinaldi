import React from "react";
import PageOut from "../../components/layouts/pageout";
import GoBackButton from "../../components/objects/gobackbutton";
import ShiftButton from "../../components/objects/shiftbutton";
import SignPad from "../../components/objects/signpad";

export default function IssueContract() {
  return (
    <>
      <PageOut title="OAB 000000/UF">
        <div className="flex flex-col md:mb-2 md:mt-4">
          <h1 className="mb-8 text-xl text-justify">
            <strong>CONTRATO ADVOCATÍCIO</strong>
          </h1>
        </div>
        <h3 className="mb-8 font-light text-sm text-justify">
          <strong>DEMANDANTE/CONTRATANTE</strong>: Fulano de Tal, brasileiro,
          enfermeiro, solteira, RG nº 12.345.678-9 SSP/SP e CPF nº
          123.456.789-00, endereço Rua 13 de Maio nº 7 b, Bexiga, São Paulo, SP,
          CEP nº 04403-150.
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          <strong>DEMANDADO</strong>: Siclano de Tal, brasileiro, comerciante,
          solteiro, RG nº 12.345.678-9 SSP/SP e CPF nº 123.456.789-00, endereço
          Rua 13 de Maio nº 7 b, Bexiga, São Paulo, SP, CEP nº 04403-150.{" "}
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          <strong>CONTRATADO</strong>: Rodney Rinaldi Tonelli, advogado inscrito
          na OAB SP 417.198, CPF 10670973840 e, escritório Travessa Dona Paula
          13, Higienópolis, São Paulo, SP, 01239-050, onde recebe notificações e
          intimações.
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          <strong>CONTRATO/DEMANDA</strong>: pelo presente instrumento,
          contratante e contratado convencionam a abrangência, responsabilidades
          e objetivos da presente representação na forma da lei e limitados às
          atividades abaixo:
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          1. A abrangência da representação estará limitada ao grau do
          procedimento em questão da contratação, possíveis desmembramentos de
          novas ações ou recursos não estarão contemplados sem que seja objeto
          de novas negociações;
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          2. A representação será composta pela defesa dos interesses da
          demandante/contratante com o ingresso em juízo, na forma de petições e
          interações de possíveis demandas intermediárias até finalização do
          processo no grau contratado, com decisão terminativa, extintiva ou
          arquivamento;
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          3. Todas as despesas jurídicas e operacionais da representação
          correrão por conta do demandante/contratante devidamente notificadas e
          com antecedência;
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          4. O objeto e os honorários advocatícios estão fixados, respeitando a
          tabela de honorários da Ordem dos Advogado do Brasil, conforme
          proposta aceita c76f3f60-5035-11ed-bdc3-0242ac120002;
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          5. O contratado se responsabilizará pelo emprego diligente dos
          conhecimentos jurídicos, meios e técnicas para a defesa dos interesses
          da demandante/contratante na abrangência e duração convencionadas
          entre as partes;
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          6. A demandante/contratante se compromete a revisar e autorizar todo
          conteúdo previamente, documentos e informações usadas para o
          desenvolvimento da atividade se responsabilizando pela veracidade
          delas;
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          7. A demandante/contratante consente com o compartilhamento das
          informações com os representantes do contratado incluindo-se
          estagiários e outros recursos externos necessários, sendo que em sua
          totalidade estarão protegidos na forma da lei;
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          8. A demandante/contratante se compromete a enviar, sendo avisada com
          antecedência e, em tempo hábil, cópias legíveis de documentos
          solicitados, passagens e hospedagens quando necessárias às execuções
          de procedimentos judiciais/operacionais fora da comarca de São Paulo
          no estado de São Paulo;
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          9. A demanda será proposta no domicílio do consumidor do
          demandante/contratante, ou seja, na Comarca de São Paulo, no Estado de
          São Paulo, domicílio no ato da propositura;
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          10. O presente contrato vige durante todo o tempo processual em
          instância referenciada e, estabelecendo-se o foro da Comarca de São
          Paulo Capital, no Estado de São Paulo para a resolução de quaisquer
          questões referentes ao contrato ora firmado.
        </h3>
        <h3 className="mb-1 font-light text-sm text-justify">
          São Paulo, 25 de outubro de 2022.
        </h3>

        <div className="flex flex-auto justify-start">
          <SignPad />
        </div>

        <h3 className="mt-10 border-t border-solid border-gray-700">
          Fulano de Tal
        </h3>
        <div id="DivButtonID" className="flex flex-auto justify-end gap-2 pt-4">
          <GoBackButton buttonStyle="btn-leaked" />
          <ShiftButton
            text="Gravar"
            buttonStyle="btn-full"
            onClick={() => {
              document.getElementById("DivButtonID").style.visibility =
                "hidden";
              document.title = "AutDig-Contrato";
              window.print();
              document.getElementById("DivButtonID").style.visibility =
                "visible";
            }}
          />
        </div>
      </PageOut>
    </>
  );
}
