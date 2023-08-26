import Button from "../components/Button";
import{ statistics } from "../constants";
import { bigShoe5 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-conatiner"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-[25px] font-monaco text-blue-400">aestate collectio</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:whitespace-nowrap relative z-10 pr-10 bg-gradient-to-r text-transparent bg-clip-text from-purple-400 to-pink-600">JUST</span>
          <br/>
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-purple-400">DO</span>
          <br/>
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-red-700 to-yellow-400">IT</span>
        </h1>
        <p className="font-monaco text-black text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Distinctively integrate interoperable total linkage and covalent processes. Seemlessly generate optimal.</p>
        <Button 
          label="Shop now"
        />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold text-blue-400">{stat.value}</p>
              <p className="leading-7 font-monaco text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40">
        <img
          src={bigShoe5}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  )
}

export default Hero;