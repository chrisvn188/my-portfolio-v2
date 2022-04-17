import { styles } from '../../styles/styles'

export const Button = ({
  children,
  onClick,
  type = 'button',
  color = 'violet',
}) => {
  return (
    <button className={styles.button(color)} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
