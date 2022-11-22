
import styles from './Designed.module.css';

const Designed = () => {
  return (
    <section className={styles.designedSection}>
      <h1>Designed for the future</h1>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.textBox}>
            <h2>Introducing an extensible editor</h2>
            <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
          </div>
          <div className={styles.textBox}>
            <h2>Robust content management</h2>
            <p>Flexible content management enables users to easily move through posts. increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
          </div>
        </div>

        <div className={styles.images}></div>
      </div>

    </section>
  )
}

export default Designed;