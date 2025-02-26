import "./Button.css"

const Button = ({text, onClick, className}) => {
    return(
        <button
        onClick= {onClick}
        className={`Button_${className}`}>
            {text}
        </button>
    )
}

export default Button;