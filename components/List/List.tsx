import styles from './list.module.scss'

interface List {
    children: React.ReactNode
}

const List = ({ children }: List) => {
  return (
    <ul className={styles.list}>
        { children }
    </ul>
  )
}

export default List