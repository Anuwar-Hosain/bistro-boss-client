import img from "../../../assets/home/slide1.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const array = [1, 2, 3];

const FoodCards = () => {
  return (
    <>
      <SectionTitle
        heading="Should Try"
        subHeading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="size grid grid-cols-3  justify-center">
        {array.map((a, i) => (
          <div key={i}>
            <div className="card w-96 bg-[#F3F3F3;] text-black text-center shadow-xl  my-14">
              <figure>
                <img src={img} alt="Shoes" className="w-full h-72" />
              </figure>
              <div className="card-body">
                <p>{a}</p>
                <h2 className="text-center font-bold text-2xl">
                  Caeser Salad!
                </h2>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline border-0 border-b-4 mt-4">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodCards;
