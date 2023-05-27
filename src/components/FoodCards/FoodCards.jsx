const FoodCards = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <>
      <div className="card w-full bg-[#F3F3F3;] text-black text-center shadow-xl rounded-none">
        <figure>
          <img src={image} alt="Shoes" className="w-full h-72" />
          <p className="absolute right-0 top-0 m-3 p-2 bg-slate-900 text-white">
            ${price}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCards;
