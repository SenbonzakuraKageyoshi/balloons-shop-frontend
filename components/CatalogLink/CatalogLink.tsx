import Link from 'next/link';
import Image from 'next/image';
import catalog from '@/public/images/svg/catalog-icon.svg';
import styles from './catalogLink.module.scss';

const CatalogLink = () => {
  return (
    <Link href="/catalog">
        <button className={styles.catalogLink}>
          <Image src={catalog} width={20} height={20} alt=""/>
          <span>Каталог</span>
        </button>
    </Link>
  )
}

export default CatalogLink