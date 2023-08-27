import Button from "../components/Button";
import{ shoes, statistics } from "../constants";
import { bigShoe5 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe5);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className='text-[25px] font-weight-500 font-montserrat text-blue-400'>
          Astate collectio
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap relative z-10 pr-10 bg-gradient-to-r text-transparent bg-clip-text from-purple-400 to-pink-600">JUST</span>
          <span className="xl:whitespace-nowrap relative z-10 pr-10 bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-purple-400">DO</span>
          <span className="xl:whitespace-nowrap relative z-10 pr-10 bg-gradient-to-r text-transparent bg-clip-text from-red-700 to-yellow-400">IT</span>
        </h1>
        <p className="font-monaco text-black text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Distinctively integrate interoperable total linkage and covalent processes. Seemlessly generate optimal.</p>
        <Button 
          label="Shop now"
        />
        <div className="xl:whitespace-nowrap relative flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold text-blue-400">{stat.value}</p>
              <p className="leading-7 font-monaco text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center bg-center bg-cover items-center xl:min-h-screen max-xl:py-40">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[17%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;