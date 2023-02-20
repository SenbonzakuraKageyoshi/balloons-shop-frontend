import Link from 'next/link';
import Image from 'next/image';
import styles from './categoryItem.module.scss';


interface CategoryItem {

}

const CategoryItem = ({  }: CategoryItem) => {
  return (
    <div className={styles.categoryItem}>
        <Link href="/category">
            <Image src="http://localhost:5000/static/categories/category1.png" width={230} height={230} alt="Превью категории"/>
            <h1 className={styles.categoryItemName}>Баблобоксы</h1>
        </Link>
    </div>
  )
}

export default CategoryItem