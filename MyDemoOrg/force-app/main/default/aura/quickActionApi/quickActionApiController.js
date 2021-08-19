({
	doInit : function(component, event, helper) {
        var actionAPI = component.find("quickActionAPI");
		actionAPI.selectAction({actionName:"EmailMessage._ReplyAll"}).then(function(response){
            console.log('Email triggered ', response);
        }).catch(function(error){
            console.log('Error occured ',error);
        });
	}
})