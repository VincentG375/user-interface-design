import {ProgressBar} from "react-bootstrap";
import Button from "react-bootstrap/Button";
const Progress = ({prevStep, nextStep, returnReset, handleChange, values}) => {

    const Return = e => {
        e.preventDefault();
        prevStep();
    }
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const Move = e => {
        var elem = document.getElementById("fuelBar");
        var width = 1;
        var id = setInterval(frame, 20);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
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
                <Button variant="success" style={{marginRight:"10px"}} onClick={Move}>Start Fueling</Button>
                <Button variant="danger">Stop Fueling</Button>
            </div>
            <ProgressBar
                animated
                variant="success"
                style={{marginBottom:"20px", marginTop:"20px", height:"3rem"}}
                id="fuelBar"
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
