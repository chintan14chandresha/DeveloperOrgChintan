trigger CaseTrigger on Case (before insert,before update) {
    //CaseTriggerHandler.updateCaseOwner(Trigger.new);
    
    if(Trigger.isUpdate && Trigger.isBefore){
        Case tempCase = Trigger.new[0];
        if(tempCase.Type == 'Other'){
            tempCase.ownerid = '00528000000IqFIAA0';
        }
    
    }
           
}