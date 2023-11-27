import Link from "next/link";

import { cn } from "@/lib/utils";
import { FaPlayCircle } from "react-icons/fa";

import styles from "@/components/header/styles.module.css";

function Header() {
  return (
    <header className={cn(styles.header, "container fluid")}>
      <div className={styles.headerWrapper}>
        <Link href={"/"} className={styles.logo}>
          <FaPlayCircle /> FekFlix
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href={"/"}>Movies</Link>
          <Link href={"/"}>Series</Link>
          <Link href={"/"}>Kids</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
