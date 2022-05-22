import React from "react";
import Email from "../../components/email";
import Layout from "../../components/layout";
import Title from "../../components/title";
import styles from "./index.module.css";

function ContactUs() {
  return (
    <>
      <Layout showback="yes">
        <Title title="ENVIE SUA MENSAGEM" />
        <div className={styles.row}>
          <Email />
        </div>
      </Layout>
    </>
  );
}

export default ContactUs;
