({
    onInit : function(component, event, helper) {
        var obj = component.get('v.testObj');
        obj = {"sobjectType":"ATestObj__c"
                   ,"Name":null};
        component.set('v.testObj', obj);
        this.setLists(component, event, helper);
        this.loadEditor(component, event, helper);
    },
    setLists : function(component, event, helper) {
        this.getPicklistOptions(component, event, helper, 'ATestObj__c', 'Selected__c', [], 'v.selectedList', '');
        this.getPicklistOptions(component, event, helper, 'ATestObj__c', 'Promoted__c', [], 'v.promotedList', '');
    },
    getPicklistOptions : function(component, event, helper, sObjectName, fieldName, filter, attrToUpdate, selectedValue) {
        //debugger;
	    var toastEvent = null;
        var errors = '';
        var msg = '';
        var row = [];
        var rows = [];
        var	action = component.get("c.getPicklistOptions");
        action.setParams({sObjectName:sObjectName
                            ,fieldName:fieldName
                            ,filter:filter});
        action.setCallback(this,function(response) {
            debugger;
            var state = response.getState();
            if (state === "SUCCESS") { 
                row = {'key':'','value':'','selected':false};
                rows.push(row);
	          	var resp = response.getReturnValue();
                for (var key in resp) {
                    if (key == selectedValue) {
                        row = {'key':key
                               ,'value':resp[key]
                               ,'selected':true};
                    } else {
                        row = {'key':key
                               ,'value':resp[key]
                               ,'selected':false};
                    }                        
                    rows.push(row);
                }
                component.set(attrToUpdate, rows);
            } else if (state === "ERROR") {
                // generic error handler
                errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        msg = errors[0].message;
                    }
                    console.log("Error: " + msg);
                    toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Error!",
                        "type":"error",
                        "message": msg
                    });
                    toastEvent.fire();
	                this.closeOnError(component);
                } else {
                    console.log("Unknown Error");
                    toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Unknown Error",
                        "type":"error",
                        "message": 'Unknown Error'
                    });
                    toastEvent.fire();
	                this.closeOnError(component);
                }
            }
        });
        $A.enqueueAction(action);
    },
    loadEditor : function(component, event, helper) {
	    var toastEvent = null;
        var header = "";
        var cmpName = "c:ATestCmpEdit";
        var cmpAttr = {"aura:Id":cmpName
                       ,"promotedList":component.getReference('v.promotedList')
                       ,"selectedList":component.getReference('v.selectedList')
                       ,"testObj":component.getReference('v.testObj')};
        $A.createComponents([
            ["c:OverlayHeader", {"aura:id":"OverlayHeader"
                                ,"iconName":"standard:scan_card" 
                                ,"altText":"" 
                                ,"heading":header
                                ,"showSearch":"false"
                                ,"showPageSize":"false"}
            ],
            [cmpName, cmpAttr],
            ["c:OverlayButtons", {"aura:Id":"OverlayButtons"
                                  ,"buttonsToShow":"Cancel,Save:brand"
                                  ,"buttonEventAction":component.getReference("v.buttonEventAction")}
            ]
        ],
        function(cmp, status, errorMessage) {
            var urlEvent;
            if (status === "SUCCESS") {
                var promise = component.find('overlaylib').showCustomModal({
                    header: cmp[0],
                    body: cmp[1],
                    footer: cmp[2],
                    cssClass: "slds-modal_small",
                    showCloseButton: false,
                    closeCallback: function() {
                        //window.location.reload();
                    }
                });
                component.set('v.promise', promise);
                component.set('v.testOverlay', cmp);
                
            } else if (status === "INCOMPLETE") {
                toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "type":"error",
                    "message": "No response from server or client is offline."
                });
                toastEvent.fire();
	            this.closeOnError(component);
                
            } else if (status === "ERROR") {
                //debugger;
                var msg = '';
                for (var e = 0; e < errorMessage.length; e++) {
                    if (errorMessage[e].status === 'ERROR') {
                        msg = errorMessage[e].message;
                        break;
                    }
                }
                toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "type":"error",
                    "message": msg
                });
                toastEvent.fire();
	            this.closeOnError(component);
            }
        });
    },
    save : function(component, event, helper) {
        debugger;
	    var toastEvent = null;
        var msg = '';
        var errors = '';
        var cmp = null;
        var urlEvent = null;
        var testObj = component.get('v.testObj');
		var action = component.get('c.saveObj');
        action.setParams({tst:testObj});
        action.setCallback(this,function(response) {
            debugger;
            var state = response.getState();
            if (state === "SUCCESS") { 
	          	var resp = response.getReturnValue();
                if (resp != null) {
                    toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Test Saved",
                        "type":"success",
                        "message": "Test Saved."
                    });
                    toastEvent.fire()
                    
                    if (!$A.util.isEmpty(component.get('v.testOverlay'))) {
                        cmp = component.get('v.testOverlay')[0];
                        cmp.destroy();
                        component.set('v.testOverlay', null);
                    }

                    urlEvent = $A.get("e.force:navigateToObjectHome");
                    urlEvent.setParams({"scope":"ATestObj__c"});
                    urlEvent.fire();
                        
                } else {
                    toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Error!",
                        "type":"error",
                        "message": 'Invalid response when creating test'
                    });
                    toastEvent.fire();
                    this.closeOnError(component);
                }
            } else if (state === "ERROR") {
                // generic error handler
                errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        msg = errors[0].message;
                    }
                    console.log("Error: " + msg);
                    toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Error!",
                        "type":"error",
                        "message": msg
                    });
                    toastEvent.fire();
                } else {
                    console.log("Unknown Error");
                    toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Unknown Error",
                        "type":"error",
                        "message": 'Unknown Error'
                    });
                    toastEvent.fire();
                }
                this.closeOnError(component);
            }
        });
        $A.enqueueAction(action);

    },
    closeOnError : function(component, event, helper) {
        var urlEvent = null;
        try {
            var prom = component.get('v.promise');
            if (prom != null) {
                prom.then(
                    function(overlay) {
                        overlay.close();
                    }
                );
            }
            urlEvent = $A.get("e.force:navigateToObjectHome");
            urlEvent.setParams({"scope":"ATestObj__c"});
            urlEvent.fire();
        } catch(err) {
			alert(err);
        }
    }
})