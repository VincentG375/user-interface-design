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
        fuelAmount: 0,
        dieselPrice: 1.23,
        higradePrice: 1.34,
        regularPrice: 1.29,
        endPrice: 5

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
    calculateEndPrice = () => {
        const { endPrice } = this.state;
        this.setState({endPrice : 7});
    }
    render(){
        const{step}=this.state;
        const{fueltype,paymenttype,cardNumber,fixedAmount, payAdvance,
            fuelAmount, endPrice,dieselPrice, higradePrice, regularPrice}=this.state;
        const values = {fueltype,paymenttype,cardNumber,fixedAmount, payAdvance,
            fuelAmount, endPrice, dieselPrice, higradePrice, regularPrice }
        switch(step) {
            case 1:
                return (

                    <div style={{width:'100%',height:'100%'}}>
                        <h1>Hello and welcome to our fueling service</h1>
                        <Button onClick={this.nextStep} style={{
                            position:'absolute',
                            top:'30%',
                            left:'40%',
                            width: '20%',
                            height: '30%'
                            }}
                            variant="success"
                        >
                            Start
                        </Button>
                    </div>
                )
            case 2:
                return (
                    <Fuel
                        nextStep={this.nextStep}
                        returnReset={this.returnReset}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Payment
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        returnReset={this.returnReset}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Progress
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        returnReset={this.returnReset}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <div>
                        The refuelling process is finished. You have filled up with {fuelAmount} litres of diesel for {endPrice} euros!
                        <div style={{marginTop: '20px'}}>
                            <Button onClick={this.returnReset}>Finish</Button>
                        </div>
                    </div>
                )
            default:
        }
    }

}