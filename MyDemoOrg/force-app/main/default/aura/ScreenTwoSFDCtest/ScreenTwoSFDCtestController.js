({ 
	goBack : function(component, event, helper) { 
		//window.history.back() 
         ///*
         
         console.log('Enter Here');
        var evt = $A.get("e.force:navigateToComponent");
        console.log('evt'+evt);
        evt.setParams({
            componentDef: "c:ScreenOneSFDCtest",
            componentAttributes: {
                   isredirect : true
              }
        });
        
        evt.fire(); 
         //*/
	} 
})