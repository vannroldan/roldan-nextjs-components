import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  return (
    <div className={styles.vpSkillsSection}>
      <h3 className={styles.vpSkillsTitle}>Skills</h3>
      <ul className={styles.vpSkillsList}>
        <li>Game Strategy</li>
        <li>Programming</li>
        <li>Designing</li>
      </ul>
    </div>
  );
}
