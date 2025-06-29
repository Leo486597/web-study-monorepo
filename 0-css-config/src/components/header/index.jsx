import styles from "./index.module.css";

const Header = (props) => {
  return (
    <div className={styles.scoped}>
      <header class="site-header">
        <div class="wrapper" data-type="wide">
          <div class="site-header__inner">
            <a href="/">
              <img class="logo" src="/assets/fungi-finders.svg" />
            </a>
            <button aria-controls="primary-navigation" aria-expanded="false">
              <span class="visually-hidden">Menu</span>
              <img src="/assets/hamburger.svg" alt="" />
            </button>
            <nav class="primary-navigation">
              <ul>
                <li><a href="/">Discover</a></li>
                <li><a href="mushroom-guide.html">Mushroom guide</a></li>
                <li><a href="mushroom-guide.html#faq">FAQ</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
