
function Card({ children, reverse }) {
    return (
        <div className={reverse ? "card reverse" : "card"}>
            {children}
            </div>
        )
}

Card.defaultProps = {
    reverse: false
}

export default Card