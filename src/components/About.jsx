import aboutImg from "../images/about.jpeg"
import Title from "./Title"

const About = () => {
    return (
        <section className="section" id="about">
        <Title preSpan="About" inSpan="Us" />
        
        <div className="section-center about-center"> 
            <div className="about-img">
                <img src={aboutImg} className="about-photo" alt="awesome beach" /> 
            </div>
            <article className="about-info">
                <h3> Explore the difference </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nesciunt numquam assumenda a rem placeat natus corrupti quo nemo eligendi corporis, expedita autem blanditiis ducimus dicta quibusdam officia quaerat? Eum!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore obcaecati a libero esse doloribus officia similique sunt eveniet vero, rerum commodi recusandae natus illo assumenda aliquam tenetur in? Enim?</p>
                <a href="#" className="btn">
                    Read More
                </a>
            </article>
        </div>
    </section>
    )
}

export default About