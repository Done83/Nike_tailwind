import { nanoid } from 'nanoid';
import ServiceCard from '../components/ServiceCard';
import { services } from '../constants';

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => {
          return(
            <ServiceCard key={nanoid()} {...service} />
          )
        })}
    </section>
  );
};
export default Services;
