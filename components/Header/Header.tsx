import React from 'react';
import CatalogLink from '../CatalogLink/CatalogLink';
import PrivatePageLink from '../PrivatePageLink/PrivatePageLink';
import HeaderNav from '../HeaderNav/HeaderNav';
import AuthModal from '../AuthModal/AuthModal';
import Image from 'next/image';
import logo from '@/public/images/svg/header-logo.svg';
import cart from '@/public/images/svg/cart-icon.svg';
import profile from '@/public/images/svg/user-icon.svg';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {

  const [modalIsOpened, setModalIsOpened] = React.useState<boolean>(false);

  return (
    <>
    <AuthModal modalIsOpened={modalIsOpened} setModalIsOpened={setModalIsOpened}/>
    <header className={styles.header}>
      <div className={styles.headerTopContent}>
        <div>
          <Link href="/">
            <Image src={logo} width={86} height={44} alt="Art Colibri"/>
          </Link>
          <CatalogLink />
        </div>
        <div>
          <HeaderNav />
          <PrivatePageLink href="/cart" setModalIsOpened={setModalIsOpened}>
            <Image src={cart} width={27} height={29} alt="Корзина"/>
          </PrivatePageLink>
          <PrivatePageLink href="/profile" setModalIsOpened={setModalIsOpened}>
            <Image src={profile} width={27} height={29} alt="Профиль"/>
          </PrivatePageLink>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header