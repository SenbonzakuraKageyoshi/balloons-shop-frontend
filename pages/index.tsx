import List from "@/components/List/List";
import CategoryItem from "@/components/CategoryItem/CategoryItem";
import ListTitle from "@/components/ListTitle/ListTitle";

const Home = () => {
  return (
    <>
    <ListTitle title="Лидеры продаж"/>
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