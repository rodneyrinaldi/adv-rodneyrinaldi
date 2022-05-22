import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./index.module.css";

function Contact(props) {
  const router = useRouter();
  const wapp =
    "https://api.whatsapp.com/send?phone=+551131646843&text=Olá, gostaria de obter maiores informações sobre:";

  return (
    <>
      <div className={styles.wrapperTop}>
        <a onClick={() => router.push("/")}>
          <Image
            src="/sidebar/user.png"
            alt="user"
            className={styles.icon}
            width="42"
            height="42"
          />
        </a>
        <br />
        <br />
        <br />
        <a onClick={() => router.push("/")}>
          <Image
            src="/sidebar/home.png"
            alt="home"
            className={styles.icon}
            width="42"
            height="42"
          />
        </a>
        <a href="#toppage">
          <Image
            src="/sidebar/top.png"
            alt="go top"
            className={styles.icon}
            width="42"
            height="42"
          />
        </a>
        {props.showback === "yes" ? (
          <a onClick={() => router.back()}>
            <Image
              src="/sidebar/back.png"
              alt="go back"
              className={styles.icon}
              width="42"
              height="42"
            />
          </a>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.wrapperBottom}>
        <a href={wapp} target="_blank" rel="noreferrer">
          <Image
            src="/sidebar/whatsapp.png"
            alt="whatsapp"
            className={styles.icon}
            target="_blank"
            rel="noreferrer"
            width="42"
            height="42"
          />
        </a>
        <a onClick={() => router.push("/contactus")}>
          <Image
            src="/sidebar/email.png"
            alt="email"
            className={styles.icon}
            width="42"
            height="42"
          />
        </a>
        <a href="https://blog.rodneyrinaldi.com">
          <Image
            src="/sidebar/blog.png"
            alt="email"
            className={styles.icon}
            width="42"
            height="42"
          />
        </a>
      </div>
    </>
  );
}

export default Contact;
