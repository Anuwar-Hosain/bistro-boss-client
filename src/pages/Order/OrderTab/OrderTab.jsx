import FoodCards from "../../../components/FoodCards/FoodCards";

const OrderTab = ({ items }) => {
  return (
    <div className=" grid grid-cols-3  justify-center gap-5">
      {items.map((item) => (
        <FoodCards key={item._id} item={item}></FoodCards>
      ))}
    </div>
  );
};

export default OrderTab;
