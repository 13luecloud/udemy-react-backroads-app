const Service = ({service: {icon, title, desc}}) => {
    return (
        <article className="service">
            <span className="service-icon">
                <i className={icon} />
            </span>
            <div className="service-info">
                <h4 className="service-title"> {title} </h4>
                <p className="service-text"> {desc} </p>
            </div>
        </article>
    )
}

export default Service