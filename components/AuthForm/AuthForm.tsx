import React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { RegisterFormValues, LoginFormValues } from '@/types/authFormValues';
import { useAppDispatch } from '@/redux/redux-hooks';
import { fetchRegister, fetchLogin }from '@/redux/userSlice/userSlice';
import styles from './authForm.module.scss';

interface AuthForm {
  setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>
}

const registerFormValues: RegisterFormValues = {
  userFirstName: '',
  userLastName: '',
  userTelephone: '',
  userEmail: '',
  userPassword: ''
}

const loginFormValues: LoginFormValues = {
  userTelephone: '',
  userEmail: '',
  userPassword: ''
}

const registerFields = 
[
  {id: 1, name: 'userFirstName', label: 'Ваше имя'},
  {id: 2, name: 'userLastName', label: 'Ваша фамилия'},
  {id: 3, name: 'userTelephone', label: 'Ваш телефон'},
  {id: 4, name: 'userEmail', label: 'Ваша почта'},
  {id: 5, name: 'userPassword', label: 'Ваш пароль'},
] as const;

const loginFields = 
[
  {id: 1, name: 'userTelephone', label: 'Ваш телефон'},
  {id: 2, name: 'userEmail', label: 'Ваша почта'},
  {id: 3, name: 'userPassword', label: 'Ваш пароль'},
] as const;

enum statusCodes {
  'Request failed with status code 200' = 'Такой пользователь уже существует',
  'Request failed with status code 400' = 'Такой пользователь уже существует',
  'Request failed with status code 404' = 'Неверный логин, телефон, или пароль',
  'Request failed with status code 500' = 'Ошибка сервера',
}

const AuthForm = ({ setSuccessMessage }: AuthForm) => {

  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<null | string>(null);

  const dispatch = useAppDispatch();

  const onRegisterHandler = (values: RegisterFormValues) => {
    setErrorMessage(null);

    dispatch(fetchRegister(values))
    .then((data) => {
      if("error" in data){
        data.error.message
        ?
        setErrorMessage(statusCodes[data.error.message as keyof typeof statusCodes])
        :
        setErrorMessage('Неизвестная ошибка');
      }else{
        setSuccessMessage('Вы успешно авторизованы!')
      }
    })
    .catch((data) => {
      if("error" in data){
        data.error.message
        ? 
        setErrorMessage(statusCodes[data.error.message as keyof typeof statusCodes])
        :
        setErrorMessage('Неизвестная ошибка');
      }else{
        setErrorMessage('Неизвестная ошибка');
      }
    })
  };

  const onLoginHandler = (values: LoginFormValues) => {
    setErrorMessage(null);

    dispatch(fetchLogin(values))
    .then((data) => {
      if("error" in data){
        data.error.message
        ? 
        setErrorMessage(statusCodes[data.error.message as keyof typeof statusCodes])
        :
        setErrorMessage('Неизвестная ошибка')
      }else{
        setSuccessMessage('Вы успешно авторизованы!')
      }
    })
    .catch((data) => {
      if("error" in data){
        data.error.message
        ? 
        setErrorMessage(statusCodes[data.error.message as keyof typeof statusCodes])
        :
        setErrorMessage('Неизвестная ошибка');
      }else{
        setErrorMessage('Неизвестная ошибка');
      }
    })
  };

  const registerSchema = Yup.object().shape({
    userFirstName: Yup.string()
      .min(2, 'Имя должно содержать минимум 2 символа')
      .max(20, 'Имя может содержать максимум 20 символов')
      .required('Поле обязательно к заполнению!'),
    userLastName: Yup.string()
      .min(2, 'Фамилия должна содержать минимум 2 символа')
      .max(40, 'Имя может содержать максимум 40 символов')
      .required('Поле обязательно к заполнению!'),
    userTelephone: Yup.string()
      .min(12, 'Номер должен содержать минимум 12 символов, включая "+"')
      .max(12, 'Номер должен содержать минимум 12 символов, включая "+"')
      .required('Поле обязательно к заполнению!'),
    userEmail: Yup.string()
      .email('Неверный формат почты')
      .required('Поле обязательно к заполнению!'),
    userPassword: Yup.string()
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .required('Поле обязательно к заполнению!'),
  });

  const loginSchema = Yup.object().shape({
    userTelephone: Yup.string()
      .min(12, 'Номер должен содержать минимум 12 символов, включая "+"')
      .max(12, 'Номер должен содержать минимум 12 символов, включая "+"')
      .required('Поле обязательно к заполнению!'),
    userEmail: Yup.string()
      .email('Неверный формат почты')
      .required('Поле обязательно к заполнению!'),
    userPassword: Yup.string()
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .required('Поле обязательно к заполнению!'),
  });

  if(!isLogin){
    return (
      <Formik
        initialValues={registerFormValues}
        validationSchema={registerSchema}
        validateOnBlur
        onSubmit={(values) => onRegisterHandler(values)}
      >
       {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, resetForm }) => (
        <>
        <form action="POST" className="form" onSubmit={handleSubmit}>
          {registerFields.map((el) => (
              <div key={el.id} className={styles.formItem}>
                <label htmlFor={el.name} className={styles.formItemLabel}>{el.label}:</label>
                <input 
                  type="text"
                  name={el.name}
                  className={styles.formItemInput}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[`${el.name}`]}
                />
                {touched[`${el.name}`] && errors[`${el.name}`] && <ErrorMessage message={errors[`${el.name}`]!}/>}
              </div>
          ))}
          <button type="submit" className={styles.formButton} disabled={isValid && dirty && !Object.keys(errors).length ? false : true}>Зарегистрироваться</button>
          {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
        </form>
        <div className={styles.formNotify}>Уже зарегистрированы? <span onClick={() => {resetForm(); setErrorMessage(null); setIsLogin(true)}}>Войдите в аккаунт!</span></div>
        </>
       )}
     </Formik>
  )
  }else{
    return (
      <Formik
        initialValues={loginFormValues}
        validationSchema={loginSchema}
        validateOnBlur
        onSubmit={(values) => onLoginHandler(values)}
     >
       {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, resetForm }) => (
        <>
        <form action="POST" className="form" onSubmit={handleSubmit}>
          {loginFields.map((el) => (
              <div key={el.id} className={styles.formItem}>
                <label htmlFor={el.name} className={styles.formItemLabel}>{el.label}:</label>
                <input 
                  type="text"
                  name={el.name}
                  className={styles.formItemInput}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[`${el.name}`]}
                />
                {touched[`${el.name}`] && errors[`${el.name}`] && <ErrorMessage message={errors[`${el.name}`]!}/>}
              </div>
          ))}
          <button type="submit" className={styles.formButton} disabled={isValid && dirty && !Object.keys(errors).length ? false : true}>Войти</button>
          {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
        </form>
        <div className={styles.formNotify}>Еще не зарегистрированы? <span onClick={() => {resetForm(); setErrorMessage(null); setIsLogin(false)}}>Создайте аккаунт!</span></div>
        </>
       )}
     </Formik>
  )
  }
}

export default AuthForm