import styles from './Nav.module.css';

import logo from '../images/logo.svg';

import hamburgerMenu from '../images/icon-hamburger.svg';
import closeMenu from '../images/icon-close.svg';

interface Props {
  handleMenu: () => void;
  menuOpen: boolean;
}


const Nav = (props: Props) => {
  let mobileMenu = props.menuOpen ? styles.menuOpen : "";
  let secondLevel = props.menuOpen ? styles.secondLevelOpen : "";
  let arrowRotate = props.menuOpen ? styles.arrowRotate : "";

  return (
    <nav>
      <div className={styles.header}>
        <img src={logo} alt="Blogr Logo" className={styles.logo} />
        {!props.menuOpen && <img src={hamburgerMenu} alt="close Menu" className={styles.hamburgerMenu} onClick={props.handleMenu} />}
        {props.menuOpen && <img src={closeMenu} alt="close Menu" className={styles.closeMenu} onClick={props.handleMenu} />}
      </div>

      <div className={`${styles.navGroup} ${mobileMenu}`}>
        <ul className={styles.topLevel}>
          <li><a href="#">Product <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" stroke-width="2" opacity=".75" d="M1 1l4 4 4-4" /></svg></a></li>
          <li><a href="#">Company <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" stroke-width="2" opacity=".75" d="M1 1l4 4 4-4" /></svg></a></li>
          <li>
            <a href="#" onClick={props.handleMenu} >Connect<svg className={`${arrowRotate}`} xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" stroke-width="2" opacity=".75" d="M1 1l4 4 4-4" /></svg></a>
            <ul className={`${styles.secondLevel} ${secondLevel}`}>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </li>
        </ul>
        <hr />
        <div className={styles.navButtons}>
          <button className={styles.loginBTN}>Login</button>
          <button className={styles.signUpBTN}>Sign Up</button>
        </div>
      </div>

    </nav >
  )
}

export default Nav;