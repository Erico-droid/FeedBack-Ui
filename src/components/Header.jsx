function Header({ text, bgColor, txtColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: txtColor
    }

    return (
        <header style={headerStyles}>
            <div className = "container">
                <h2>{text}</h2>
                </div>
            </header>
        )
}        

Header.defaultProps = {
    text: "feedback UI",
    bgColor: 'rgba(0,0,0,0.4)',
    txtColor: '#ff6a95'
}
        
export default Header