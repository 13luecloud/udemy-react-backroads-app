const Tour = ({tour: {image, date, title, desc, country, days, price}}) => {
    return (
        <article class="tour-card">
          <div class="tour-img-container">
            <img src={image} class="tour-img" alt="" />
            <p class="tour-date"> {date} </p>
          </div>
          <div class="tour-info">
            <div class="tour-title">
              <h4> {title} </h4>
            </div>
            <p> {desc} </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> {country}
              </p>
              <p>{days} days</p>
              <p>from {price}</p>
            </div>
          </div>
        </article>
    )
}

export default Tour