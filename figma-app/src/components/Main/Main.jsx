import styles from './main.module.css'

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>
        <span>140</span>
      </div>
      <div className={styles.buttoms}>
      <button className={styles.increase}>УВЕЛИЧИТЬ</button>
      <button className={styles.decrease}>УМЕНЬШИТЬ</button>
      <button className={styles.reset}>СБРОСИТЬ</button>
      </div>
    </div>
  );
};

export default Main;