import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center ">
        <Link to={`/order/${title}`}>
          <Button name="ORDER YOUR FAVOURITE FOOD"></Button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
