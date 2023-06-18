import { services } from "../data.jsx"

import Title from "./Title"
import Service from "./Service.jsx"

const Services = () => {
    return (
        <section className="section services" id="services">
           <Title preSpan="Our" inSpan="Services" />

            <div className="section-center services-center">
                {services.map((service) =>{
                    return (
                        <Service service={service} />
                    );
                })}
            </div>

        </section>
    )
}

export default Services 