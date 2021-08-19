trigger OpportunityTrigger on Opportunity (before insert,before update) {

    Set<Id> newOpportunityIds = Trigger.newMap.keyset();
    List<aggregateResult> result = [SELECT Opportunity__c,count(id) contractCount FROM Contract WHERE id in :newOpportunityIds group by Opportunity__c];
    for(AggregateResult ar: result){
     System.debug('Output :'+ar);   
    }
}