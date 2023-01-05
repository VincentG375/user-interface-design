import Form from "react-bootstrap/Form";
import {ButtonGroup, FormGroup, FormLabel, ProgressBar} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
const Progress = ({prevStep, nextStep, returnReset, handleChange, values}) => {

    const Return = e => {
        e.preventDefault();
        prevStep();
    }
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
        <div style={{ display:"flex", flexDirection: "column", justifyContent:"space-around"}}>
            <div>
                <Button variant="success" style={{marginRight:"10px"}}>Start Fueling</Button>
                <Button variant="danger">Stop Fueling</Button>
            </div>
            <ProgressBar
                animated
                variant="success"
                now = {50}
                label={50}
                style={{marginBottom:"20px", marginTop:"20px", height:"3rem"}}
            >
            </ProgressBar>
            <div>
                <Button onClick={Return} style={{marginRight:"10px"}}>Back</Button>
                <Button onClick={Continue} style={{marginRight:"10px"}}>Next</Button>
                <Button onClick={Cancel} variant="danger">Cancel Process</Button>
            </div>
        </div>
    )
}
export default Progress;
