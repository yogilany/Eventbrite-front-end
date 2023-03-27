import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
/**
 * 
 * @param {name: Name of this element after creation} props 
 * @returns Login form containing email, password forms & log in submit button
 */
export const LoginForm = (props) => {
     
    return (<Container fluid className='m-0 p-0' style={{ minWidth: "200px" }} data-testid={props.data_testid}>
        <form>
            <Form.Group className="mb-3" controlId="formLoginEmail">
                <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLoginPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button as="input" type="submit" value="Log in" variant="flat btn-flat" />{' '}
        </form>
    </Container>);
}

export default (LoginForm);