
import styles from './Free.module.css';

import laptopMobile from '../images/illustration-laptop-mobile.svg';
import laptopDesktop from '../images/illustration-laptop-desktop.svg';

const Free = () => {
  return (
    <section className={styles.freeSection}>
      <div className={styles.image}>
        <picture>
          <source media="(min-width: 800px)" srcSet={laptopDesktop} />
          <img src={laptopMobile} alt="Laptop" />
        </picture>
      </div>

      <div className={styles.textBoxGroup}>
        <div className={styles.textBox}>
          <h2>Free, open, simple</h2>
          <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architexture is clean and is relatively easy to learn.</p>
        </div>

        <div className={styles.textBox}>
          <h2>Powerful tooling</h2>
          <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
        </div>
      </div>
    </section>
  )
}

export default Free;