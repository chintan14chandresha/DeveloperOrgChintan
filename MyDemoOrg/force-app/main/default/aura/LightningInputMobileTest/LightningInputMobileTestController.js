({
	myAction : function(component, event, helper) {
		//component.find("recordEditForm").submit();
	},
    
    clickNext : function(component, event, helper) {
        //console.log('Here'+component.find("stringSecond").showHelpMessageIfInvalid());
        
        var NumberField = component.get("v.stringSecond");//event.getSource();
        //var NumberFieldValue = NumberField.get("v.value");
        
        console.log('NumberField : '+NumberField);        
        
        /*
        if(NumberFieldValue == 1){
            //component.find("stringSecond").reportValidity();
            NumberField.setCustomValidity('Hello There');
        }
        
        if(NumberField.checkValidity()){
            NumberField.reportValidity();
        }*/
        
        /*alert("You clicked: " + event.getSource().get("v.validity"));
            if(!component.find("stringSecond").checkValidity()){
                alert("Another String Field is Empty");
                console.log("Field is Empty");  
            }else{
                alert("Another String Field is Okay");
                console.log("Field is not Empty");
            }
            $A.get('e.force:refreshView').fire();
        */
	} 
})