import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/api/auth/login">Login</a>
        <a href="/profile">Profile</a>
        <a href="/api/auth/logout">Logout</a>
      </div>
    </main>
  );
}
