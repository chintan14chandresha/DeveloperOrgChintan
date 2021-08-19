({
    doInit : function(component, event, helper) {
        debugger;
        var action = component.get("c.getCommunityBaseURL");
        action.setParams({ communityName : 'Partner Portal' });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var url = response.getReturnValue();
                url = url + $A.get("$Label.c.SampleLinkLabel");
                component.set("v.vfUrl",url);
            }
        });
        $A.enqueueAction(action);
    },
    goToRecord : function(component, event, helper) {
        // Fire the event to navigate to the contact record
        var sObjectEvent = $A.get("e.force:navigateToURL");
        sObjectEvent.setParams({
            "url": component.get("v.vfUrl")
        })
        sObjectEvent.fire();
    }
})