({ 
	goTo : function(component, event, helper) { 
       /* 
      var ScreenTwoSFDCtest = component.find("ScreenOneSFDCtest");
      var pageReference = {
                         "type": "standard__component",
                         "attributes": {
                                         "componentName": "c__ScreenTwoSFDCtest"
                                       }, 
                         "state": {
                             'message':'This is the target page'
                         }
                        };
     ScreenTwoSFDCtest.navigate(pageReference);
     /************************************************
	let pageReference = { 
					type: 'standard__navItemPage', 
					attributes: { 
							'apiName': 'ScreenTwoSFDCtest', 
					} 
		};
	component.find("ScreenTwoSFDCtest").navigate(pageReference) 
    ************************************************ */
	
    
     console.log('Enter Here');
        var evt = $A.get("e.force:navigateToComponent");
        console.log('evt'+evt);
        evt.setParams({
            componentDef: "c:ScreenTwoSFDCtest",
            componentAttributes: {
                   isredirect : true
              }
        });
        
        evt.fire();
   
        
        //New code to Test the official documentatin
        /*
        var navService = cmp.find("navService");
        event.preventDefault();
        var pageReference  = component.find("ScreenOneSFDCtest");
    	navService.navigate(pageReference);
        */
    }         
})