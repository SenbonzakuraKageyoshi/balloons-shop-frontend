import styles from './errorMessage.module.scss';

interface ErrorMessage {
    message: string,
}

const ErrorMessage = ({ message }: ErrorMessage) => {
  return (
    <p className={styles.errorMessage}>{message}</p>
  )
}

export default ErrorMessage