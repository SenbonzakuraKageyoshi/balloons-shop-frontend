import { User } from '@/types/user';
import styles from './userInfo.module.scss';

type UserInfo = Omit<User, "id" | "token" | "updatedAt" | "userPasswordHash">

const UserInfo = ({ userFirstName, userLastName, userTelephone, userEmail }: UserInfo) => {
  return (
    <>
    <div className={styles.userInfoItem}>
        <div className={styles.userInfoItemLabel}>Имя:</div>
        <div className={styles.userInfoItemValue}>{userFirstName + ' ' + userLastName}</div>
    </div>
    <div className={styles.userInfoItem}>
      <div className={styles.userInfoItemLabel}>Номер телефона:</div>
      <div className={styles.userInfoItemValue}>{userTelephone}</div>
    </div>
    <div className={styles.userInfoItem}>
      <div className={styles.userInfoItemLabel}>Email:</div>
      <div className={styles.userInfoItemValue}>{userEmail}</div>
    </div>
    </>
  )
}

export default UserInfo