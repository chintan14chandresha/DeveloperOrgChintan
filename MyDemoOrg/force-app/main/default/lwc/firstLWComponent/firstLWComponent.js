import { LightningElement, track } from 'lwc';

export default class testTreeNavigation extends LightningElement {

    @track treeState = 'Expand All';
    @track items;

    connectedCallback() {
        this.items = [
            {
                label: 'Policy Overview',
                name: 'policyOverview',
                expanded: false,
                items: [
                    {
                        label: 'Password',
                        name: 'policyOverview-password',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Restriction Notification',
                        name: 'policyOverview-restrictionNotification',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Key Policy Info',
                        name: 'policyOverview-policyInfo',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Policy Holder Info',
                        name: 'policyOverview-policyHolderInfo',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Agent Info',
                        name: 'policyOverview-agentInfo',
                        expanded: true,
                        items: [],
                    },
                ],
            },
            {
                label: 'Policy Details',
                name: 'policyDetails',
                expanded: false,
                items: [
                    {
                        label: 'General',
                        name: 'policyDetails-general',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Term Data',
                        name: 'policyDetails-termData',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Riders and Benefits',
                        name: 'policyDetails-ridersAndBenefits',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Modified Endowment Data',
                        name: 'policyDetails-modifiedEndowment',
                        expanded: true,
                        items: [],
                    }
                ],
            },
            {
                label: 'Policy Roles',
                name: 'policyRoles',
                expanded: false,
                items: [
                    {
                        label: 'Associated Roles',
                        name: 'policyRoles-associatedRoles',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Associated Agents',
                        name: 'policyRoles-associatedAgents',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Beneficiaries',
                        name: 'policyRoles-beneficiaries',
                        expanded: true,
                        items: [],
                    },
                ],
            },
            {
                label: 'Values',
                name: 'values',
                expanded: false,
                items: [
                    {
                        label: 'Policy Values',
                        name: 'values-policyValues',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Tax Information',
                        name: 'values-taxInformation',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Loans',
                        name: 'values-loans',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Dividends',
                        name: 'values-dividends',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Death Benefit Details',
                        name: 'values-deathBenefitDetails',
                        expanded: true,
                        items: [],
                    },
                ],
            },
            {
                label: 'Payments',
                name: 'payments',
                expanded: false,
                items: [
                    {
                        label: 'Recurring Payment Data',
                        name: 'payments-recurringPayment',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Premium Data',
                        name: 'payments-premium',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Payment Frequency Quotes',
                        name: 'payments-paymentFrequency',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Loans',
                        name: 'payments-loans',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'OPP',
                        name: 'payments-OPP',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Premium Offset Proposal (POP)',
                        name: 'payments-POP',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Premium Deposit Account (PDA)',
                        name: 'payments-PDA',
                        expanded: true,
                        items: [],
                    },
                ],
            },
            {
                label: 'Schedule Withdrawals',
                name: 'withdrawals',
                expanded: false,
                items: [
                    {
                        label: 'Periodic Partial Withdrawal',
                        name: 'withdrawals-ppwa',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Withholdings Information',
                        name: 'withdrawals-withholdingsInfo',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Payee Information (EFT)',
                        name: 'withdrawals-payeeInformationEFT',
                        expanded: true,
                        items: [],
                    },
                    {
                        label: 'Payee Information (Check)',
                        name: 'withdrawals-payeeInformationCheck',
                        expanded: true,
                        items: [],
                    },
                ],
            },
            {
                label: 'Service Requests',
                name: 'serviceRequests',
                expanded: true,
                items: [],
            },
            {
                label: 'Notes',
                name: 'notes',
                expanded: true,
                items: [],
            },
        ];
    }

    toggleTreeItems() {
        let currentState = this.treeState;
        // eslint-disable-next-line no-console
        console.log('currentState--'+currentState);
        //console.log('--before items--' + JSON.stringify(this.items));
        this.items.forEach(item => {
            //console.log('--before item--' + JSON.stringify(item));
            if (currentState === 'Expand All') {
                item.expanded = true;
            }
            else {
                item.expanded = false;
            }
            //console.log('--after item--' + JSON.stringify(item));
        })
        //console.log('--after items--' + JSON.stringify(this.items));

        if (this.treeState === 'Collapse All') {
            this.treeState = 'Expand All';
        }
        else {
            this.treeState = 'Collapse All';
        }
    }
}