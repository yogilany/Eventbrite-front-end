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
    minWidth: "30%"
  };

  return (
    <a href="./" style={TitleStyle} data-testid={props.data_testid}
      className={props.className}
    >
      <Logo />
    </a>
  );
};

export default LoginTitle;
