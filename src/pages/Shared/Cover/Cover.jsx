import { Parallax } from "react-parallax";

const Cover = ({ img, title, para }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px] w-full">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" bg-black bg-opacity-30 items-center p-20 w-full ">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{para}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
