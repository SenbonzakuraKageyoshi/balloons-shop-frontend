import Link from 'next/link';
import styles from './headerNav.module.scss';

interface NavigationItem {
    id: number,
    name: string,
    href: string
}

const navigation: NavigationItem[] = 
[
    {id: 1, name: 'Доставка', href: "/delivery"},
    {id: 2, name: 'Контакты', href: "/contacts"},
    {id: 3, name: 'Галерея', href: "/gallery"},
    {id: 4, name: 'Отзывы', href: "/reviews"},
]

const HeaderNav = () => {
  return (
    <nav className={styles.headerNav}>
        {navigation.map((el) => (
            <Link href={el.href} key={el.id} className={styles.headerNavLink}>
                {el.name}
            </Link>
        ))}
    </nav>
  )
}

export default HeaderNav