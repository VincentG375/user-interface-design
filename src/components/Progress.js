import Form from "react-bootstrap/Form";
import {FormGroup, FormLabel, ProgressBar} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
const Progress = ({prevStep, nextStep, handleChange, values}) => {
    const useProgress = (maxTimeInSeconds = 300) => {
        const [elapsedTime, setElapsedTime] = useState(0);
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                if (progress < 1) {
                    setElapsedTime(t => t + 1);
                }
            }, 1000);

            return () => clearInterval(intervalId);
        }, []);

        useEffect(() => {
            setProgress(elapsedTime / maxTimeInSeconds);
        }, [elapsedTime]);

        return progress;
    };
    const Return = e => {
        e.preventDefault();
        prevStep();
    }
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const progress = useProgress();
    return(
        <div>
            <Button>Start Fueling</Button>
            <ProgressBar
                animated
                variant="success"
                progress={progress}>
            </ProgressBar>
            <Button onClick={Return}>Prev</Button>
        </div>
    )
}
export default Progress;
