import React, {Component} from 'react';
import './Wizard.css';
import BrandChoice from "../BrandChoice/BrandChoice";
import Button from "../Button/Button";
import {data} from "../../data/data";
import ModelChoice from "../ModelChoice/ModelChoice";
import FuelChoice from "../FuelCoice/FuelChoice";
import TransmissionChoice from "../TransmissionChoice/TransmissionChoice";
import Summary from "../Summary/Summary";


class Wizard extends Component {
    constructor(props) {
        super(props);
        this.data = data;
        this.modelChoiceData = '';
        this.state = {
            currentStep: 'brand',
            disabled: true
        }
    }

    doNextStep = () => {
        this.setState ({disabled: true});
        if (this.state.currentStep === 'brand') {
            this.setState({currentStep: 'model'});
        } else if (this.state.currentStep === 'model') {
            this.setState({currentStep: 'fuel'});
        } else if (this.state.currentStep === 'fuel') {
            this.setState({currentStep: 'transmission'});
        } else if (this.state.currentStep === 'transmission') {
            this.setState({currentStep: 'summary'});
        }
    };

    doBackStep = () => {
        this.setState ({disabled: false});
        if (this.state.currentStep === 'summary') {
            this.setState({currentStep: 'transmission'});
        } else if (this.state.currentStep === 'transmission') {
            this.setState({currentStep: 'fuel'});
        } else if (this.state.currentStep === 'fuel') {
            this.setState({currentStep: 'model'});
        } else if (this.state.currentStep === 'model') {
            this.setState({currentStep: 'brand'});
        }
    };

    initStep(name) {
        let activeStep;
        switch (name) {
            case 'brand':
                activeStep = <BrandChoice changeUndisabled={this.undisableNextButton} renderData={this.data.brand}/>;
                break;
            case 'model':
                activeStep = <ModelChoice renderData={this.modelChoiceData}/>;
                break;
            case 'fuel':
                activeStep = <FuelChoice renderData={this.modelChoiceData}/>;
                break;
            case 'transmission':
                activeStep = <TransmissionChoice renderData={this.modelChoiceData}/>;
                break;
            case 'summary':
                activeStep = <Summary renderData={this.modelChoiceData}/>;
                break;
        }
        return activeStep;
    }

    undisableNextButton = () => {
        this.setState ({disabled: false});
    };

    render() {
        return (
            <div className="wizard">
                {this.initStep(this.state.currentStep)}
                <div className="buttons">
                    {this.state.currentStep !== 'brand' &&
                    <Button disabled="" clickCallback={this.doBackStep} destiny="Back"/>}
                    {this.state.currentStep !== 'summary' &&
                    <Button disabled={this.state.disabled} clickCallback={this.doNextStep} destiny="Next"/>}
                </div>
            </div>
        )
    }
}

export default Wizard;