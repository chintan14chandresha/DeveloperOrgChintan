public with sharing class AccountDynamicHandler {
    public void findChangeInValues(String NameOfObject,Map<Id,sObject> newValue,Map<Id,sObject> oldValue){
        Set<id> newRecordIds = new Set<id>();
        newRecordIds = newValue.keySet();
        System.debug('newValue.getSObjectType(): ' + newValue.getSObjectType());
        for (TestAccConMetadata__mdt customMetadata :   [
                                                            SELECT
                                                                Field_API_Name__c,
                                                                Object_Name__c
                                                            FROM
                                                                TestAccConMetadata__mdt
                                                            WHERE
                                                                Object_Name__c =: NameOfObject
                                                        ]){
            for(Id newRecordId: newRecordIds){
                if(oldValue.get(newRecordId).get(customMetadata.Field_API_Name__c) != newValue.get(newRecordId).get(customMetadata.Field_API_Name__c)){
                    System.debug('Value is Changed');
                }else System.debug('Value is Not Changed');
            }
        }
    }
}