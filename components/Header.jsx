import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.vpHeaderBox}>
      <h1 className={styles.vpHeaderTitle}>My Profile</h1>
      <h2 className={styles.vpHeaderSubtitle}>Vann Phillippe E. Roldan</h2>
    </header>
  );
}
