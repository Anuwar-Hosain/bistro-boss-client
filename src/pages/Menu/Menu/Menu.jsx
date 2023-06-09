import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="our menu"
        para="Would you like to try a dish?"
      ></Cover>
      <SectionTitle
        heading="TODAY'S OFFER"
        subHeading="Don't miss"
      ></SectionTitle>
      <div className="size margin">
        <MenuCategory items={offered} title="offered"></MenuCategory>
      </div>
      {/* dessert items */}
      <Cover
        img={dessertImg}
        title="DESSERTS"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="size margin">
        <MenuCategory items={desserts} title="desserts"></MenuCategory>
      </div>
      {/* pizza items */}
      <Cover
        img={pizzaImg}
        title="PIZZA"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="size margin">
        <MenuCategory items={pizza} title="pizza"></MenuCategory>
      </div>
      {/* salad items */}
      <Cover
        img={saladImg}
        title="SALADS"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="size margin">
        <MenuCategory items={salad} title="salad"></MenuCategory>
      </div>
      {/* shop items */}
      <Cover
        img={soupImg}
        title="SOUPS"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="size margin">
        <MenuCategory items={soup} title="soup"></MenuCategory>
      </div>
    </>
  );
};

export default Menu;
