import React, {Component} from 'react';
import './Wizard.css';
import BrandChoice from '../BrandChoice';
import Button from '../Button';
import {data} from '../../data/data';
import ModelChoice from '../ModelChoice';
import FuelChoice from '../FuelChoice';
import TransmissionChoice from '../TransmissionChoice';
import Summary from '../Summary';
import StoreService from '../../services/store.service'
import { IData } from '../../interfaces/interfaces'

interface IWizardState {
    currentStep: string;
    disabled: boolean
}

class Wizard extends Component < {}, IWizardState>{
    private data: IData = data;
    private storeService = new StoreService();
    public state = {
        currentStep: 'brand',
        disabled: true
    };

    private doNextStep = () => {
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

    private doBackStep = () => {
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

    private initStep(name: string): React.ReactNode {
        let activeStep;
        switch (name) {
            case 'brand':
                activeStep = <BrandChoice changeEnabled={this.enableNextButton} renderData={this.data.brand}/>;
                break;
            case 'model':
                activeStep = <ModelChoice changeEnabled={this.enableNextButton}
                                          renderData={this.data.brand[this.storeService.getStore().brand]}/>;
                break;
            case 'fuel':
                activeStep = <FuelChoice changeEnabled={this.enableNextButton} renderData={this.data.fuel}/>;
                break;
            case 'transmission':
                activeStep = <TransmissionChoice changeEnabled={this.enableNextButton}
                                                 renderData={this.data.transmission}/>;
                break;
            case 'summary':
                activeStep = <Summary/>;
                break;
            default:
                activeStep = null;
        }
        return activeStep;
    }

    private enableNextButton = () => {
        this.setState({disabled: false});
    };

    public render(): React.ReactNode {
        return (
            <div className="wizard">
                {this.initStep(this.state.currentStep)}
                <div className="buttons">
                    {this.state.currentStep !== 'brand' &&
                    <Button disabled={false} clickCallback={this.doBackStep} destiny="Back"/>}
                    {this.state.currentStep !== 'summary' &&
                    <Button disabled={this.state.disabled} clickCallback={this.doNextStep} destiny="Next"/>}
                </div>
            </div>
        )
    }
}

export default Wizard;