import { LightningElement, api, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Small from '@salesforce/client/formFactor';

const FIELDS = ['Account.Id', 'Account.Name', 'Account.Description'];

export default class TestIOSLWC extends NavigationMixin(LightningElement) {

    @api recordId;
    @track error;
    hasLIMS = false;
    account;
    accONC;
    accLIMS;


    @wire(getRecord, { recordId: '$recordId', fields: FIELDS, formFactor: Small })
    wiredRecord({ error, data }) {
        if (error) {
            this.isLoading = false;
            console.log('Error: ' + JSON.stringify(error));
            this.error = 'Unknown error';
            if (Array.isArray(error.body)) {
                this.error = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                this.error = error.body.message;
            }
        } else if (data) {
                this.account = data;
                this.accONC = this.account.fields.Name.value;
                this.accLIMS = this.account.fields.Description.value;
                if (this.account.fields.Description.value != null) {
                if (this.account.fields.Description.value.length > 0) {
                    this.hasLIMS = true;
                }
            }
        }
    }
}