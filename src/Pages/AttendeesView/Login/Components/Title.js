import { ReactComponent as Logo } from "../../../../assets/eventbrite-logo.svg";

/**
 *
 * @param {None} props
 * @returns Returns Eventbrite logo
 */
export const LoginTitle = (props) => {
  const TitleStyle = {
    height: "auto",
    width: "30%",
    minWidth: "30%"
    // position: "absolute",
    // left: "13%",
    // top: "1%",
  };

  return (
    <div style={TitleStyle} data-testid={props.data_testid}>
      <Logo />
    </div>
  );
};

export default LoginTitle;
