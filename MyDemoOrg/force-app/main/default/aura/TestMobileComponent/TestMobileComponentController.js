({
	myAction : function(component, event, helper) {
		
	},
    
    createRecord : function (component, event, helper) {
    var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
      "recordId": "0010I00001wcjZj",
      "slideDevName": "related"
    });
    navEvt.fire();
	},
    
    show : function (component, event, helper) {
        component.set("v.truthy",true);
    }
})