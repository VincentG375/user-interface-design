import Form from "react-bootstrap/Form";
import {ButtonGroup, FormCheck, FormGroup, FormLabel, ToggleButton} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
const Payment = ({prevStep, nextStep, handleChange, values}) => {
    const [radioValue, setRadioValue] = useState('1');
    const Return = e => {
        e.preventDefault();
        prevStep();
    }
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const radios = [
        { name: 'Card', value: 'card' },
        { name: 'Cash', value: 'cash' }
    ];
    const inAdvance = (e)=> {
        document.getElementById("checkBox").value = false;
    }
    return(
        <div>
            {values.fueltype}
            <Form>
                <FormGroup>
                    <FormLabel>How do you want to pay?</FormLabel>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Do you want to pay in advance?</FormLabel>
                    <FormCheck
                        name="checkBox"
                        value={true}
                        onChange={handleChange('payAdvance')}
                        onInput={inAdvance}></FormCheck>
                    {values.payAdvance}
                </FormGroup>
                <FormGroup>
                    <FormLabel>How much do you want to pay?</FormLabel>
                    <Form.Control type="number" onChange={handleChange('fixedAmount')} placeholder="Enter amount" />
                </FormGroup>
                <Button onClick={Return} style={{marginRight:"10px"}}>Prev</Button>
                <Button onClick={Continue}>Next</Button>
            </Form>
        </div>
    )
}
export default Payment;