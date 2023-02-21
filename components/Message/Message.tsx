import styles from './message.module.scss';

interface Message {
    message: string,
    isError: boolean
}

const Message = ({ message, isError }: Message) => {
  return (
    <p className={isError ? styles.errorMessage : styles.successMessage}>{message}</p>
  )
}

export default Message