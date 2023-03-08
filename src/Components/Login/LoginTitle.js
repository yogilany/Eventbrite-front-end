import { ReactComponent as Logo } from "../../assets/eventbrite-logo.svg"

/**
 * 
 * @param {None} props 
 * @returns Returns Eventbrite logo
 */
export const LoginTitle = (props) => {
    const TitleStyle = {
        height: "8%",
        width: "8%",
        position: "absolute",
        left: "13%",
        top: "1%",
    }

    return (
        <div style={TitleStyle}>
            <Logo />
        </div >
    )
}

export default LoginTitle;