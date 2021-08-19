({
	doInit : function(component, event, helper) {        
        helper.onInit(component, event, helper);
    },
    handleButtonEvent : function(component, event, helper) {
        debugger;
		var urlEvent = null;
        var cmp = null;
        var evtType = component.get('v.buttonEventAction');

        if (evtType === 'save') { //save

            helper.save(component, event, helper);

        } else if (evtType === 'error') { //error
            
            urlEvent = $A.get("e.force:navigateToObjectHome");
            urlEvent.setParams({"scope":"ATestObj__c"});
            urlEvent.fire();

        } else { //cancel
            
            component.get('v.promise').then(
                function(overlay) {
                    overlay.close();
                }
            );
            if (!$A.util.isEmpty(component.get('v.testOverlay'))) {
                cmp = component.get('v.testOverlay')[0];
                cmp.destroy();
                component.set('v.testOverlay', null);
            }
            urlEvent = $A.get("e.force:navigateToObjectHome");
            urlEvent.setParams({"scope":"ATestObj__c"});
            urlEvent.fire();
        }
    },
})