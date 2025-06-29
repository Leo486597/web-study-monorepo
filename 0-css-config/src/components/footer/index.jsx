import styles from "./index.module.css";

const Footer = (props) => {
  return (
    <div className="wrapper">
      <div className={styles.test1}>
        <div className="footer-content">
          this is footer
          <div className="footer-content-1">footer content 1</div>
        </div>
        <div className="footer-1">1</div>
        <div className="footer-2">2</div>
      </div>

      <div className={styles.test2}>
        test2
      </div>
    </div>

  );
};

export default Footer;
