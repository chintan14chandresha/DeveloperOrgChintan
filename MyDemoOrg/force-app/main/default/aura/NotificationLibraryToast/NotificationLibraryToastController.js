({
    doInit : function(component, event, helper) {
        window.setTimeout(function(){
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                mode: "sticky",
                type: "error",
                title:"please review these error(s):",
                message:"call the quick action function and displaying the error chintan call the quick action function and displaying the error call the quick action function and displaying the error"
            });
            toastEvent.fire();
            var dismissActionPanel = $A.get("e.force:closeQuickAction");
            dismissActionPanel.fire();
        },1000);
        
    },
    handleShowToast : function(component, event, helper) {
        component.find('notifLib').showToast({
            "mode": "sticky",
            "variant": "error",
            "title": "please review these error(s):",
            "message": "call the quick action function and displaying the error chintan call the quick action function and displaying the error call the quick action function and displaying the error"
        });
    }

})