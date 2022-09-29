import styles from './footer.module.css'
import logo from './logo2.png'

const Footer = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.logo}>
        <img src={logo} alt="" />

      </div>
      <div className={styles.menu}>
        <ul className={styles.partners}>
          <li>Партнерам</li>
          <li>Разработчикам</li>
          <li>Вакансии</li>
        </ul>
      </div>
      <div className={styles.Ooo}>
        <p>ООО"интукод",2020г.</p>
      </div>
      
    </div>
  );
};

export default Footer;