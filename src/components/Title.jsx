const Title = ({preSpan, inSpan}) => {
    return (
        <div className="section-title">
            <h2> {preSpan} <span>{inSpan}</span> </h2>
        </div>
    )
}

export default Title