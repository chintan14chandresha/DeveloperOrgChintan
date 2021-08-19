({
 createAccount: function (component, event, helper) {     	
        var createRecordEvent = $A.get('e.force:createRecord');
     	console.log(createRecordEvent);
        if ( createRecordEvent ) {
            createRecordEvent.setParams({
                'entityApiName': 'Account',
                'defaultFieldValues': {
                    'Type' : 'Prospect',
                    'Industry' : 'Apparel',
                    'Rating' : 'Hot'
                }
            });
            createRecordEvent.fire();
        } else {
            /* Create Record Event is not supported */
            alert("Account creation not supported");
        }
    }
})