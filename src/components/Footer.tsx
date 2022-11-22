
import styles from './Footer.module.css';

import logo from '../images/logo.svg';

import FooterColumn from './FooterColumn';



const Footer = () => {

  let productLinks = [
    { link: "Overview", href: "#" },
    { link: "Pricing", href: "#" },
    { link: "Marketplace", href: "#" },
    { link: "Features", href: "#" },
    { link: "Integrations", href: "#" },
  ];

  let companyLinks = [
    { link: "About", href: "#" },
    { link: "Team", href: "#" },
    { link: "Blog", href: "#" },
    { link: "Careers", href: "#" },
  ];

  let connectLinks = [
    { link: "Contact", href: "#" },
    { link: "Newletters", href: "#" },
    { link: "LinkedIn", href: "#" },
  ]

  return (
    <section className={styles.footerSection}>
      <div className={styles.footerInner}>
        <div className={styles.logo}>
          <img src={logo} alt="Blogr logo" />
        </div>

        <div className={styles.footerGroup} >
          <FooterColumn section={"Product"} links={productLinks} />
          <FooterColumn section={"Company"} links={companyLinks} />
          <FooterColumn section={"Connect"} links={connectLinks} />
        </div>
      </div>
    </section>
  )
}

export default Footer;