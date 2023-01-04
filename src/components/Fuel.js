import Form from "react-bootstrap/Form";
import {FormGroup, FormLabel, FormSelect} from "react-bootstrap";
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
                        <optgroup label="Petrol">
                            <option>Hi-Grade</option>
                            <option>Regular</option>
                        </optgroup>

                    </Form.Select>
                </FormGroup>
                <Button onClick={Continue}>Next</Button>
            </Form>

        </div>
    )
}
export default Fuel;