({
	helperMethod : function(component) {
		component.find('field1').showHelpMessageIfInvalid();
        
        if(!component.find('field1').checkValidity() == true){            
            component.set("v.errors","Please fix the missing information");              
        }
        //Just to check
        console.log('Errors:'+component.get('v.errors'));
	}
})