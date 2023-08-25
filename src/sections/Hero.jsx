import Button from "../components/Button";
import{ statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-conatiner"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-[25px] font-monaco text-blue-400">aestate collectio</p>
        <h1 className="mt-10 font-palanquin text-8xl">
          <span>JUST</span>
          <br/>
          <span>DO</span>
          <br/>
          <span>IT</span>
        </h1>
        <p>Distinctively integrate interoperable total linkage and covalent processes. Seemlessly generate optimal.</p>
        <Button 
          label="Shop now"
        />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero;