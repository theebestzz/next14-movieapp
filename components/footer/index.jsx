import Link from "next/link";

import styles from "@/components/footer/styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.feksoftware.com" target="_blank">
        Fek
      </Link>
    </footer>
  );
}

export default Footer;
