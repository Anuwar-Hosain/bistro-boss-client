import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BannerBoss from "../BannerBoss/BannerBoss";
import Category from "../Category/Category";
import CellPhone from "../CellPhone/CellPhone";
import Featured from "../Featured/Featured";
import FoodCards from "../FoodCards/FoodCards";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BannerBoss></BannerBoss>
      <PopularMenu></PopularMenu>
      <CellPhone></CellPhone>
      <FoodCards></FoodCards>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
