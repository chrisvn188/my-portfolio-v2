import { styles } from '../../styles/styles'

export const Link = ({ children, color = '', href }) => {
  return (
    <a className={styles.link(color)} href={href}>
      {children}
    </a>
  )
}
