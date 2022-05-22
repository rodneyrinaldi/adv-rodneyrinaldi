import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./index.module.css";

function Job() {
  useEffect(() => {}, []);

  const router = useRouter();

  return (
    <>
      <div className={styles.row}>
        <p>
          <h1>
            Rodney Rinaldi <span>ADVOGADO</span>
          </h1>
        </p>
        <p>Prezados,</p>
        <p>
          Atuante nas áreas civil e empresarial, com especializações em direito
          processual civil, direito digital, estratégia de negócios e
          gerenciamento de projetos possuo ainda competências em direito do
          consumidor, politicas de integridade e privacidade de dados.
        </p>
        <p>
          Com larga experiência tecnológica no meio empresarial, na gestão de
          produtos, clientes e consumidores, agora tenho aplicado as boas
          práticas compatíveis à legislação para gerar valor em uma nova
          experiência do mundo jurídico.
        </p>
        <p>
          Apreciaria a oportunidade em debater pessoalmente as possibilidades de
          trabalho, estou disponível para um possível contato de acordo com sua
          conveniência.
        </p>
        <p>Atenciosamente,</p>
        <p>
          (11) 98141-7040
          <br />
          <a onClick={() => router.push("/")}>adv.rodneyrinaldi.com</a>
          <br />
          rodney@rodneyrinaldi.com
        </p>
      </div>
    </>
  );
}

export default Job;
