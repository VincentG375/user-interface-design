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
        paymenttype: '',
        cardNumber: '',
        payAdvance: false,
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
    returnReset = () => {
        const { step } = this.state;
        this.setState({ step: 1 });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    render(){
        const{step}=this.state;
        const{fueltype,paymenttype,cardNumber,fixedAmount, payAdvance}=this.state;
        const values = {fueltype,paymenttype,cardNumber,fixedAmount, payAdvance}
        switch(step) {
            case 1:
                return (

                    <div style={{width:'100%',height:'100%'}}>
                        <h1>Hello and welcome to our fueling service</h1>
                        <Button onClick={this.nextStep} style={{
                            position:'absolute',
                            top:'50%',
                            left:'45%',
                            with: '20%'
                        }}>
                            Start
                        </Button>
                    </div>
                )
            case 2:
                return (
                    <Fuel
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Payment
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
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