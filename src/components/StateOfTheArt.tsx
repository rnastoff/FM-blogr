
import styles from './StateOfTheArt.module.css';

import phones from '../images/illustration-phones.svg';

import cellPhones from '../images/illustration-phones.svg';

const StateOfTheArt = () => {
  return (
    <section className={styles.stateOfTheArt}>
      <div className={styles.image}>
        <picture>
          {/* <source media={cellPhones} srcSet={cellPhones} /> */}
          <img src={cellPhones} alt="Cell Phones" />
        </picture>
        {/* <img src={phones} alt="cell phones" className={styles.phonesIMG} /> */}
      </div>

      <div className={styles.textBox}>
        <h2>State of the Art Infrastructure</h2>
        <p>With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load instantly,
          no matter where your readers are, keeping your site competitive.
        </p>
      </div>
    </section>
  )
}

export default StateOfTheArt;