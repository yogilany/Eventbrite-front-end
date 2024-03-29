import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../../assets/eventbrite-logo.svg";

/**
 *
 * @param {None} props
 * @returns Returns Eventbrite logo
 */
export const LoginTitle = (props) => {
  const TitleStyle = {
    height: "auto",
    width: "150px",
    minWidth: "30%",
    color: "#e2533e",
  };

  return (
    <Link
      to="/"
      style={TitleStyle}
      data-testid={props.data_testid}
      className={props.className}
    >
      <Logo />
    </Link>
  );
};

export default LoginTitle;
