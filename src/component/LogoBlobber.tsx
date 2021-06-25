import styles from './LogoBlobber.module.css';
import logo from '../assets/logo.svg'
import logotext from '../assets/logofont.svg'
import logotextlight from '../assets/logofontlight.svg'
import getTheme from '../logic/getTheme'

function LogoBlobber() {
  var theme = getTheme();
  return (
    <div className={styles.holder}>
        <img alt="blobber logo" draggable="false" src={logo} className={styles.bannerlogo} />
        <img alt="blobber." draggable="false" src={(theme === "dark") ? logotext : logotextlight} className={styles.logofont} />
        {/* <span className={styles.font}>
          blobber.
        </span> */}
    </div>
  );
}

export default LogoBlobber;
