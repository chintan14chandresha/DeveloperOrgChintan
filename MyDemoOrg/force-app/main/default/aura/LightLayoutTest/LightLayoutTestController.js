({
    //default method with the class
    myAction : function(component, event, helper) {
        var gloablId = component.getGlobalId();
    },

    //method to change text on icon click
    handleClick : function(component, event) {
        //fetch the "text" attribute from the component into the variable.
        var attributeValue = component.get("v.label");
        
        if (attributeValue != null || attributeValue != '') {
            component.set("v.text",attributeValue);
        }
    }
})