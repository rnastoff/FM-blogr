import styles from './FooterColumn.module.css';

interface Props {
  section: string;
  links: { link: string; href: string; }[]

}

const FooterColumn = (props: Props) => {
  let column = props.links.map(link => {
    return (
      <a href={link.href}>{link.link}</a>
    )
  })

  return (
    <div className={styles.footerColumn}>
      <h3>{props.section}</h3>
      {column}
    </div>
  )
}

export default FooterColumn;