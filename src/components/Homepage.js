import {Card, FormGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Homepage.css';
import Form from 'react-bootstrap/Form';
import {Component} from "react";
import Fuel from "./Fuel";
import Payment from "./Payment";
import Progress from "./Progress";

export default class homepage extends Component{
    state = {
        step: 1,
        fueltype: 'Diesel',
        paymentype: '',
        cardNumber: '',
        fixedAmount: 0,
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    render(){
        const{step}=this.state;
        const{fueltype,paymenttype,cardNumber,fixedAmount}=this.state;
        const values = {fueltype,paymenttype,cardNumber,fixedAmount}
        switch(step) {
            case 1:
                return (
                    <Fuel
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Payment
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Progress
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:
        }
    }

}