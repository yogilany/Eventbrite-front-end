import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap/'

/**
 * 
 * @param {name: Name of this element after creation} props 
 * @returns Sign up form containing email, password forms & log in submit button
 */
export const SignupForm = (props) => {
    // const ButtonStyle = {
    //     backgroundColor: "#d1410c",
    //     color: "white",
    //     padding: "0.6rem 0rem",
    //     width: "65%",
    //     justifyContent: "center",
    //     transition: "backgroundColor 100ms ease-in",
    //     borderRadius: "0.5vmin",
    //     fontSize: "1rem",
    //     ":hover":
    //         "backgroundColor: #f05537"

    // }

    // const FormControlStyle = {
    //     width: "65%",
    //     borderRadius: "2px",
    //     margin:"2rem 0 ",
    //     ":focus": {
    //         color: "red"
    //     }
    // }

    // return (<div className={props.name} style={{ margin: "10% 0" }}>
    //     <form>

    //         <Form.Group className="mb-3" controlId="formLoginEmail">
    //             <Form.Control style={FormControlStyle} type="email" placeholder="Email address" />
    //         </Form.Group>

    //         <Button style={ButtonStyle} as="input" type="submit" value="Continue" variant="flat btn-flat" />{' '}
    //     </form>
    // </div>);

    const ButtonStyle = {
        backgroundColor: "#d1410c",
        color: "white",
        padding: "0.6rem 0rem",
        width: "100%",
        justifyContent: "center",
        transition: "backgroundColor 100ms ease-in",
        borderRadius: "0.5vmin",
        fontSize: "1rem",
        ":hover":
            "backgroundColor: #f05537"

    }

    const FormControlStyle = {
        width: "65%",
        borderRadius: "2px",
        ":focus": {
            color: "red"
        }
    }
    return (<Container fluid className='m-0 p-0' style={{ minWidth: "200px" }}>
        <form>
            <Form.Group className="mb-3" controlId="formLoginEmail">
                <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
            <Button style={ButtonStyle} as="input" type="submit" value="Continue" variant="flat btn-flat" />{' '}
        </form>
    </Container>);
}

export default (SignupForm);