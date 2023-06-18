import Title from "./Title"

const Services = () => {
    return (
        <section className="section services" id="services">
           <Title preSpan="Our" inSpan="Services" />

            <div className="section-center services-center">
                <article className="service">
                    <span className="service-icon">
                        <i className="fas fa-wallet fa-fw" />
                    </span>
                    <div className="service-info">
                        <h4 className="service-title"> Saving Money </h4>
                        <p className="service-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, molestiae sequi! Sapiente debitis tenetur reprehenderit minus numquam cum, provident, quasi voluptatem voluptatibus quia id consequatur, consequuntur rerum autem corporis. Voluptas?
                        </p>
                    </div>
                </article>

                <article className="service">
                    <span className="service-icon">
                        <i className="fas fa-tree fa-fw" />
                    </span>
                    <div className="service-info">
                        <h4 className="service-title"> Endless Hiking </h4>
                        <p className="service-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, molestiae sequi! Sapiente debitis tenetur reprehenderit minus numquam cum, provident, quasi voluptatem voluptatibus quia id consequatur, consequuntur rerum autem corporis. Voluptas?
                        </p>
                    </div>
                </article>

                <article className="service">
                    <span className="service-icon">
                        <i className="fas fa-socks fa-fw" />
                    </span>
                    <div className="service-info">
                        <h4 className="service-title"> Amazing Comfort </h4>
                        <p className="service-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, molestiae sequi! Sapiente debitis tenetur reprehenderit minus numquam cum, provident, quasi voluptatem voluptatibus quia id consequatur, consequuntur rerum autem corporis. Voluptas?
                        </p>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default Services 