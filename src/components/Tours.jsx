import { tours } from "../data.jsx"

import Title from "./Title"
import Tour from "./Tour"

const Tours = () => {
    return (
    <section class="section" id="tours">
      <Title preSpan="Featured" inSpan="Tours" />

      <div class="section-center featured-center">
        {tours.map((tour) =>{
            return (
                <Tour tour={tour} />
            );
        })}
      </div>
    </section>
    )
}

export default Tours