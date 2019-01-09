import React, {Component} from 'react';
import './Wizard.css';
import BrandChoice from "../BrandChoice";
import Button from "../Button";
import {data} from "../../data/data";
import ModelChoice from "../ModelChoice";
import FuelChoice from "../FuelChoice";
import TransmissionChoice from "../TransmissionChoice";
import Summary from "../Summary";
import StoreService from '../../services/store.service'


class Wizard extends Component {
    constructor(props) {
        super(props);
        this.data = data;
        this.state = {
            currentStep: 'brand',
            disabled: true
        }
    }

    doNextStep = () => {
        this.setState({disabled: true});
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
        this.setState({disabled: false});
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
                activeStep = <ModelChoice changeUndisabled={this.undisableNextButton}
                                          renderData={this.data.brand[StoreService.getStore().brand]}/>;
                break;
            case 'fuel':
                activeStep = <FuelChoice changeUndisabled={this.undisableNextButton} renderData={this.data.fuel}/>;
                break;
            case 'transmission':
                activeStep = <TransmissionChoice changeUndisabled={this.undisableNextButton}
                                                 renderData={this.data.transmission}/>;
                break;
            case 'summary':
                activeStep = <Summary renderData={this.modelChoiceData}/>;
                break;
            default:
                activeStep = null;
        }
        return activeStep;
    }

    undisableNextButton = () => {
        this.setState({disabled: false});
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