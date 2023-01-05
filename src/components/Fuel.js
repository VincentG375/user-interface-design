import Form from "react-bootstrap/Form";
import {FormGroup, FormLabel, FormSelect} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Fuel = ({nextStep, handleChange, values, returnReset}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const Cancel = e => {
        // eslint-disable-next-line no-restricted-globals
        var result = confirm("Do you really want to cancel the process?");
        if (result) {
            e.preventDefault();
            returnReset();
        }
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
                <Button onClick={Continue} style={{marginRight:"10px"}}>Next</Button>
                <Button onClick={Cancel} variant="danger">Cancel Process</Button>
            </Form>

        </div>
    )
}
export default Fuel;