
import styles from './Blogr.module.css';

import Modern from './Modern';
import Designed from './Designed';
import StateOfTheArt from './StateOfTheArt';
import Free from './Free';
import Footer from './Footer';

const Blogr = () => {

  return (
    <div className={styles.blogr}>
      <Modern />
      <Designed />
      <StateOfTheArt />
      <Free />
      <Footer />
    </div>
  )
}

export default Blogr;