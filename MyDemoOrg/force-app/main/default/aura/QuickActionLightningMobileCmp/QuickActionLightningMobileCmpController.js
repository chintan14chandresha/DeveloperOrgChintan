({ 
    doInit : function(component, event, helper) {
        var recordId = component.get("v.recordId");
        var action = component.get("c.getContact");
        console.log("recordId :"+recordId);
        action.setParams({
            "contactId" : recordId
        })
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log(state);            
            
            var endPoint = $A.get("$Label.c.FP_Portal_Link");;            
            
            $A.get("e.force:closeQuickAction").fire();       
            
            console.log('URL '+endPoint);
            var urlEvent = $A.get("e.force:navigateToURL");
            urlEvent.setParams({
            "url": endPoint,
            "target": '_blank'
            });
            console.log(urlEvent);
            urlEvent.fire(); 
            
        });
        
        $A.enqueueAction(action); 
        /**/     
    }
})