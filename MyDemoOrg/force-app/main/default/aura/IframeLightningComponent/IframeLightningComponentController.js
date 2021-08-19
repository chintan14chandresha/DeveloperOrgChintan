({
	myAction : function(component, event, helper) {  
        /* 
         * This is the previous implementation of the code of customer.
         * 
        var vfUrl = "/apex/ChatterFeedTestPage?entityId=00128000002rFEOAA2";
		component.set("v.vfUrl", vfUrl);
        */
	},
    doInit : function(component, event, helper) {
        var subjectId = component.get('v.subjectId');

        $A.createComponent(
        "forceChatter:publisher", {
            "context": "RECORD",
            "recordId": subjectId
        },
        function(recordFeed) {
            //Add the new button to the body array
            if (component.isValid()) {
                var body = component.get("v.cmpBody");
                body.push(recordFeed);
                component.set("v.cmpBody", body);
            }
        });

        $A.createComponent(
        "forceChatter:feed", {
            "type": "Record",
            "subjectId": subjectId
        },
        function(recordFeed) {
            //Add the new button to the body array
            if (component.isValid()) {
                var body = component.get("v.cmpBody");
                body.push(recordFeed);
                component.set("v.cmpBody", body);
            }
        });
    }
})