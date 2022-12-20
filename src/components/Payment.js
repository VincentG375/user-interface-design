import Form from "react-bootstrap/Form";
import {FormGroup, FormLabel} from "react-bootstrap";
import Button from "react-bootstrap/Button";
const Payment = ({prevStep, nextStep, handleChange, values}) => {
    const Return = e => {
        e.preventDefault();
        prevStep();
    }
    return(
        <div>
            {values.fueltype}
            <Form>
                <Button onClick={Return}>Prev</Button>
            </Form>
        </div>
    )
}
export default Payment;