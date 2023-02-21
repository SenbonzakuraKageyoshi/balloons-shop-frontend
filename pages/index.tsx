import List from "@/components/List/List";
import CategoryItem from "@/components/CategoryItem/CategoryItem";
import Title from "@/components/Title/Title";

const Home = () => {
  return (
    <>
    <Title title="Лидеры продаж"/>
    <List>
    <CategoryItem />
    <CategoryItem />
    <CategoryItem />
    <CategoryItem />
    <CategoryItem />
    <CategoryItem />
    </List>
    </>
  )
}

export default Home