public class CaseTriggerHandler {
    public static void updateCaseOwner(List<Case> lstcase){
        List<Case> ListOfCase = new List<Case>();
        
        Id queueId = (Id) '00G0I000003eQ9c';
        
        for(Case cse : lstcase){
            if(cse.Type == 'Other'){
                cse.Subject = 'Updated by Process builder and then Trigger';
                cse.ownerid = queueId;
            }
            ListOfCase.add(cse);
        }
        
        
        
        if(ListOfCase != null || !ListOfCase.isEmpty()){
            insert ListOfCase;
        }
        
    }
}