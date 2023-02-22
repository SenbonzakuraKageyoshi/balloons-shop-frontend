import React from 'react';
import ActionResultMessage from '../ActionResultMessage/ActionResultMessage';
import AuthForm from '../AuthForm/AuthForm';
import Image from 'next/image';
import close from '@/public/images/svg/close-icon.svg';
import styles from './authModal.module.scss';

interface AuthModal {
    modalIsOpened: boolean,
    setModalIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthModal = ({ modalIsOpened, setModalIsOpened }: AuthModal) => {

  const [successMessage, setSuccessMessage] = React.useState<null | string>(null);

  React.useEffect(() => {
    if(successMessage){
        const timeout = setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)

        return () => {
          clearTimeout(timeout)
        }
    }
}, [successMessage])

  const closeModal = () => {
    const form = document.querySelector<HTMLFormElement>('.form');

    if(form){
      form.reset();
    }

    setModalIsOpened(false);
  };

  return (
    <>
    <ActionResultMessage message={successMessage} isError={false} />
    <div className={modalIsOpened ? styles.modalWrapperActive : styles.modalWrapper}>
        <div className={styles.modalContent}>
            <header className={styles.modalHeader}>
                <div>Авторизация</div>
                <button onClick={closeModal}>
                  <Image src={close} width={40} height={40} alt="Закрыть"/>
                </button>
            </header>
            <AuthForm setSuccessMessage={setSuccessMessage}/>
        </div>
    </div>
    </>
  )
}

export default AuthModal