import styles from './ListTitle.module.scss';

interface ListTitle{
    title: string
}

const ListTitle = ({ title }: ListTitle) => {
  return (
    <h1 className={styles.listTitle}>{title}</h1>
  )
}

export default ListTitle