import logo from './logo.png'
import styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <img src={logo} alt="" />
    </div>
      <div className={styles.menu}>
        <ul>
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;