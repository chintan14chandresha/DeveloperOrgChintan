({
    doInit : function(component, event, helper) {
        var today = new Date();
        component.set('v.today', today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());
        var sampleDate = "1955-06-10 00:00:00";
        var temp = $A.localizationService.formatDate(sampleDate,"YYYY-MM-DD");
        component.set('v.finalDate',temp);
        component.set('v.finalString',temp);
    },
    
    setOutput : function(component, event, helper) {
    	var cmpMsg = component.find("msg");
    	$A.util.removeClass(cmpMsg, 'hide');
    	
        var todayVal = component.find("today").get("v.value");
        var oDateTime = component.find("oDateTime");
        oDateTime.set("v.value", todayVal);
      
    }
})