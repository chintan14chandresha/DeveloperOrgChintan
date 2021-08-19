({
    init : function(component, event, helper) {
        var pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__UrlTestLightningComponent',
            },
            state: {
                "c__firstname": "John",
                "c__ani": "1234567899",
                "c__workgroup": "1234",
                "c__direction": "I",
            }
        };
        component.set("v.pageReference", pageReference);
     },
     handleClick: function(component, event, helper) {
        var navService = component.find("navService");
        var pageReference = component.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageReference);
    },
    gotoURL : function (component, event, helper) {    
        var urlEvent = $A.get("e.force:navigateToSObject");
        urlEvent.setParams({
          "recordId": "0010I00001wcjZjQAI"
        });
        urlEvent.fire();
    }
})