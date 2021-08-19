import { LightningElement, track } from 'lwc';

export default class testTreeNavigation extends LightningElement {

    @track treeState = 'Expand All';
    @track items;
    @track selectedItemValue = '';    
    @track targetSection;
    @track treeItems;

    //Global Search Prop
    @track searchField = '';
    @track searchFieldSection;
    @track isSearchCalled = false;

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
        var treeItems = this.template.querySelector('lightning-tree').items;
        treeItems.forEach(item => {
            if (currentState ==='Expand All') {
                item.expanded = true;
            }
            else {
                item.expanded = false;
            }
        })
        this.items = treeItems;  

        if (this.treeState === 'Collapse All') {
            this.treeState = 'Expand All';
        }
        else {
            this.treeState = 'Collapse All';
        }
    }     

    /*switchTreeNode(nodeExpand,nodeAddr){
        console.log('In Function switchTreeNode');
        if(nodeExpand){
            this.template.querySelector('lightning-tree').items[nodeAddr].expanded = false;
        }else{
            this.template.querySelector('lightning-tree').items[nodeAddr].expanded = true;
            
        }  
        return null;
    }*/

    handleOnselect(event) { 
        //Subham Fix working
        if(event.detail.name != null || event.detail.name != ''){
                //var ii = [];
            for(var i=0;i<this.items.length;i++){                                
                var checkExpanded = this.template.querySelector('lightning-tree').items[i].expanded;
                if(this.items[i].name == event.detail.name){                    
                    if(checkExpanded){
                        this.template.querySelector('lightning-tree').items[i].expanded = false;
                    }else{
                        this.template.querySelector('lightning-tree').items[i].expanded = true;
                        return;
                    }       
                }
            }            
        }
        

        //Subham Fix not working
        /* if(event.detail.name === 'policyRoles-associatedRoles')
        return;
        if(event.detail.name === 'policyRoles-associatedAgents')
        return;*/
        
        //var treeItems = ''; 
        //console.log('event.detail.name :'+event.detail.name);
        //console.log('this.items :'+this.items);        
        
        /*const item = this.findNested(this.items, 'name', event.detail.name);
        //console.log('----item----'+item.label);
            this.selectedItemValue = item.label;
            this.targetSection = event.detail.name;
            // To handle tree section expansion on click of the tab
            this.treeItems = this.template.querySelector('lightning-tree').items;
            //console.log('---treeItems---' + JSON.stringify(this.treeItems));
            this.treeItems.forEach(item => {
                if (item.label === this.selectedItemValue) {
                    if (item.expanded) {
                        item.expanded = false;
                    }
                    else {
                        item.expanded = true;
                    }
                }                
            })             
            this.items = this.treeItems;
            */

      /* console.log('Test : '+event.detail.name);
        var treeItems;       
        try {
            if (!this.isSearchCalled) {
                this.searchField = '';
            }
            const item = this.findNested(this.items, 'name', event.detail.name);
            this.selectedItemValue = item.name;
            this.targetSection = event.detail.name;
            // To handle tree section expansion on click of the tab
            treeItems = this.template.querySelector('lightning-tree').items;
            console.log('---treeItems---' + JSON.stringify(treeItems));
            treeItems.forEach(item => {
                if (item.name === this.selectedItemValue) {
                    if (item.expanded) {
                        item.expanded = false;
                    }
                    else {
                        item.expanded = true;
                    }
                }
            })  
            this.items = treeItems;
        }
        catch (e) {
            console.log('viewpolicyChildTabs --> Search Failed --> ' + e);
        } */             
    }

    // Searches the object for the item containing a key of the provided name that contains the value provided
    findNested(obj, key, value) {
        // Base case
        if (obj[key] === value) {
            return obj;
        }

        // otherwise
        const objKeys = Object.keys(obj);
        for (const k of objKeys) {
            if (typeof obj[k] === 'object' || Array.isArray(obj[k])) {
                const found = this.findNested(obj[k], key, value);

                if (found) {
                    // If the object was found in the recursive call, bubble it up.
                    return found;
                }
            }
        }
        return null;
    }
    
}