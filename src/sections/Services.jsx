import { nikeSplash } from '../assets/images';
import ServiceCard from '../components/ServiceCard';
import { services } from '../constants';

const Services = () => {
  return (
    <section id='services' className="flex justify-center items-center w-full max-container">
      <div className='flex-1 flex justify-center items-center mt-20'>
        <img
          src={nikeSplash}
          alt='product detail'
          width={600}
          height={500}
          className='object-contain'
        />
      </div>
      <div className='justify-between items-center max-lg:flex-col'>
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services;