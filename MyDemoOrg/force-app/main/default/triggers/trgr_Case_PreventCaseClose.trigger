trigger trgr_Case_PreventCaseClose on Case(before update){
    
    /*for(Case cse: [select id,status,(select id,status from Case.cases) from case where id in :Trigger.new]){
        system.debug('cse '+cse);
        if(cse.status != Trigger.oldMap.get(cse.Id).status){
            Trigger.new[0].addError('Cannot close');
        }
    }*/
    
    for(Case cse: Trigger.new){
        system.debug('cse '+cse);
        if(cse.status != Trigger.oldMap.get(cse.Id).status &&  cse.Status == 'Closed'){            
            List<Case> lst_child_case = [select id,status from case where ParentId = :cse.Id and status != 'Closed'];
            if(lst_child_case != null && lst_child_case.size() > 0)
                cse.addError('Cannot close');
        }
    }
    
    /*for(Case affectedListOfCase : [select id,status,(select id,status from Case.cases) from case where id in :Trigger.new]){
            Case OldCase = Trigger.oldMap.get(affectedListOfCase.Id);
            if(affectedListOfCase.Status != OldCase.status ){ //&& affectedListOfCase.Status == 'Closed'
                Trigger.new[]
                affectedListOfCase.addError('Cannot close',false);
                for(Case childCase : affectedListOfCase.Cases){
                    if(childCase.status != 'Closed')
                        affectedListOfCase.addError('Cannot close ');
                }
            }           
    }*/     
}