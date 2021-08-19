import { LightningElement, api, wire, track } from 'lwc';

export default class SolutionHubHeader extends LightningElement 
{

    @api recordId;
    @track editEnabled = false;
    @track colClassShade = 'slds-col slds-size_1-of-8 slds-theme_shade';
    @track colClass = 'slds-col slds-size_1-of-8';
    @track savingRecord = false;

    





}