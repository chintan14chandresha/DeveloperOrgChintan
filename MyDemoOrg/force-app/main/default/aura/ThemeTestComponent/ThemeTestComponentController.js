({ 
    init : function(cmp, event, helper) { 
    var action = cmp.get("c.getUIThemeDescription"); 
    
    action.setCallback(this, function(a) { 
    var uiTheme = a.getReturnValue(); 
    cmp.set("v.uiTheme", uiTheme); 
    }); 
    
    $A.enqueueAction(action); 
} 
})