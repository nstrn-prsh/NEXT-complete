import styles from "Footer.module.css";
import { Image } from "next/image";

export default function Footer() {
     return (
          <>
               <footer className={styles.footer}>
                    React Course{" "}
                    <Image src='#' alt='logo' className={styles.logo} />
               </footer>
          </>
     );
}
