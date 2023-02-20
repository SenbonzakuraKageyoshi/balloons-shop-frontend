import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './privatePageLink.module.scss';

interface PrivatePageLink {
    children: React.ReactNode,
    href: string,
    setModalIsOpened?: React.Dispatch<React.SetStateAction<boolean>>
}

const PrivatePageLink = ({ children, href, setModalIsOpened }: PrivatePageLink) => {
  return (
    true && setModalIsOpened
    ?
    <button className={styles.privatePageLink} onClick={() => setModalIsOpened(true)}>
        { children }
    </button>
    :
    <Link href={href} className={styles.privatePageLink}>
        { children }
    </Link>
  )
}

export default PrivatePageLink