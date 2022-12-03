import React from "react";
import PageOut from "../../components/layouts/pageout";
import GoBackButton from "../../components/objects/gobackbutton";
import ShiftButton from "../../components/objects/shiftbutton";
import SignPad from "../../components/objects/signpad";

export default function IssueDeclaration() {
  return (
    <>
      <PageOut title="OAB 000000/UF">
        <div className="flex flex-col md:mb-2 md:mt-4">
          <h1 className="mb-4 text-xl text-justify">
            <strong>PROCURAÇÃO AD JUDICIA</strong>
          </h1>
        </div>
        <h3 className="mb-8 font-light text-sm text-justify">
          <strong>OUTORGANTE</strong>: Fulano de Tal, brasileiro, enfermeiro,
          solteira, RG nº 12.345.678-9 SSP/SP e CPF nº 123.456.789-00, endereço
          Rua 13 de Maio nº 7 b, Bexiga, São Paulo, SP, CEP nº 04403-150.{" "}
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          <strong>OUTORGADO</strong>: Rodney Rinaldi Tonelli, advogado inscrito
          na OAB SP 417.198, CPF 10670973840 e, escritório Travessa Dona Paula
          13, Higienópolis, São Paulo, SP, 01239-050, onde recebe notificações e
          intimações.
        </h3>
        <h3 className="mb-8 font-light text-sm text-justify">
          <strong>PODERES</strong>: pelo presente instrumento a outorgante
          confere ao outorgado amplos poderes para o foro em geral, com cláusula
          ad-judicia et extra, em qualquer Juízo, Instância ou Tribunal, podendo
          propor contra quem de direito, as ações competentes e defendê-lo nas
          contrárias, seguindo umas e outras, até final decisão, usando os
          recursos legais e acompanhando-os, conferindo-lhe ainda, poderes
          especiais para receber citação inicial, confessar, e conhecer a
          procedência do pedido, desistir, renunciar ao direito sobre que se
          funda a ação, transigir, firmar compromissos ou acordos, receber e dar
          quitação, podendo agir em Juízo ou fora dele, assim como substabelecer
          a outrem, com ou sem reservas de iguais poderes, para agir em conjunto
          ou separadamente com o substabelecido, especificamente para que o
          represente tecnicamente na defesa de seus direitos em processo de ação
          de XXXXXXXXXXXXXXXXX contra XXXXXXXXXXXXXXXXX
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
              document.title = "AutDig-Procuracao";
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
