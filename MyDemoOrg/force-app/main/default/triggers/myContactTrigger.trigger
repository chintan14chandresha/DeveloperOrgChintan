trigger myContactTrigger on Contact (before update) {
    Contact oldvalue = new Contact();
    List<Account> lstAccount = [select id,name,BillingAddress,NumberofLocations__c,CustomerPriority__c from Account];
    For(contact con : trigger.new){
        oldvalue = trigger.oldMap.get(con.id);
        
        String compare = con.Sample_Address__c;
        
        //System.debug('Length of Sample_Address__c : '+compare.length());
        //compare = compare.replaceAll('\r','');
        
        if(compare != oldvalue.Sample_Address__c){
            System.debug('Value Changed');
            con.Old_Value__c = oldvalue.Sample_Address__c;
        }
    }
    for(Account acc : lstAccount){
        
    }
}