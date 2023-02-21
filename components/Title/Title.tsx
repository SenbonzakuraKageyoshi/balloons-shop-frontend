import styles from './title.module.scss';

interface Title{
    title: string
}

const Title = ({ title }: Title) => {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}

export default Title