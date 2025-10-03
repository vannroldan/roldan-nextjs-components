import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.vpCardShell}>
      <img
        src="avatar.png"
        alt="Profile"
        className={styles.vpProfileImage}
      />
      <h2 className={styles.vpName}>Vann Phillippe E. Roldan</h2>
      <p className={styles.vpAge}>Age: 22</p>
      <p className={styles.vpDescription}>Always up for a gaming session</p>
    </div>
  );
}
