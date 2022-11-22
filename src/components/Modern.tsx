import { useState } from 'react';

import styles from './Modern.module.css';

import Nav from './Nav';

const Modern = () => {

  let [menuOpen, setMenu] = useState(false);

  let handleMenu = () => {
    setMenu(!menuOpen);
  }


  return (
    <section className={styles.modernSection}>
      <div className={styles.bgImageParent}>
        <div className={styles.bgImage}></div>
      </div>
      <Nav handleMenu={handleMenu} menuOpen={menuOpen} />

      <div className={styles.contentGroup}>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className={styles.buttonGroup}>
          <button className={styles.startBTN}>Start for Free</button>
          <button className={styles.learnBTN}>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Modern;