import styles from './LogoBlobber.module.css';
import logo from '../assets/logo.svg'

function LogoBlobber() {
  return (
    <div className={styles.holder}>
        <img alt="blobber logo" draggable="false" src={logo} className={styles.bannerlogo} />
        <span className={styles.font}>
          blobber.
        </span>
    </div>
  );
}

export default LogoBlobber;
