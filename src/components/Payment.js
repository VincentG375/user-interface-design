import Form from "react-bootstrap/Form";
import { FormCheck, FormGroup, FormLabel, ToggleButton} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
const Payment = ({prevStep, nextStep, returnReset, handleChange, values}) => {
    const [radioValue, setRadioValue] = useState('1');
    const Return = e => {
        e.preventDefault();
        prevStep();
    }
    const Cancel = e => {
        // eslint-disable-next-line no-restricted-globals
        var result = confirm("Do you really want to cancel the process?");
        if (result) {
            e.preventDefault();
            returnReset();
        }
    }
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const PayAdvance = e =>{
        handleChange('payAdvance')
        document.getElementById()
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
            <Form style={{display:"flex", flexDirection: "column", justifyContent:"space-around"}}>
                <FormGroup>
                    <FormLabel style={{marginRight:"10px"}}>How do you want to pay?</FormLabel>
                    <div>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-secondary' : 'outline-secondary'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </div>

                </FormGroup>
                <FormGroup>
                    <FormLabel>Do you want to pay in advance?</FormLabel>
                    <FormCheck
                        id={"checkBox"}
                        value={true}
                        onChange={PayAdvance}
                        >
                    </FormCheck>
                    {values.payAdvance}
                </FormGroup>
                <FormGroup>
                    <FormLabel>How much do you want to pay?</FormLabel>
                    <Form.Control
                        type="number"
                        onChange={handleChange('fixedAmount')}
                        placeholder="Enter amount"
                        style={{marginBottom:"20px"}}
                    />
                </FormGroup>
                <div>
                    <Button onClick={Return} style={{marginRight:"10px"}}>Back</Button>
                    <Button onClick={Continue} style={{marginRight:"10px"}}>Next</Button>
                    <Button onClick={Cancel} variant="danger">Cancel Process</Button>
                </div>
            </Form>
        </div>
    )
}
export default Payment;