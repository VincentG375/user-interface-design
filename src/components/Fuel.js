import Form from "react-bootstrap/Form";
import {FormGroup, FormLabel} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Fuel = ({nextStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    return(
        <div>
            <Form>
                <FormGroup className="mb-3">
                    <FormLabel>
                        Select fuel type:
                    </FormLabel>
                    <Form.Select
                        value={values.fueltype}
                        onChange={handleChange('fueltype')}
                    >
                        <option>Diesel</option>
                        <option>Regular Petrol</option>
                        <option>Hi-Grade Petrol</option>
                    </Form.Select>
                </FormGroup>
                <Button onClick={Continue}>Next</Button>
            </Form>

        </div>
    )
}
export default Fuel;