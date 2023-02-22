import styles from './actionResultMessage.module.scss'

interface ActionResultMessage {
    message: string | null,
    isError: boolean
}

const ActionResultMessage = ({ message, isError }: ActionResultMessage) => {
  return (
    <div className={message ? isError ? styles.actionResultMessageErrorActive : styles.actionResultMessageSuccessActive : styles.actionResultMessage}>
        { message }
    </div>
  )
}

export default ActionResultMessage