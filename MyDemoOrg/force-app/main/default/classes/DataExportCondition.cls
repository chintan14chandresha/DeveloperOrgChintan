global class DataExportCondition implements TxnSecurity.PolicyCondition { 
    static boolean isRepeated=true;
    public boolean evaluate(TxnSecurity.Event e) {       
          
        // The event data is a Map<String, String>.
        // We need to call the valueOf() method on appropriate data types to use them in our logic.
        Integer numberOfRecords = Integer.valueOf(e.data.get('NumberOfRecords'));
        String entityName = e.data.get('EntityName');
        String userId= e.userId;     
       
        // Trigger the policy only for an export on Accounts, where we are downloading more than 10000 records
        // for generic object list replace below If statement with 'Account'.equals(entityName) || 'Opportunity'.equals(entityName)
        // || 'Lead'.equals(entityName)|| 'Contact'.equals(entityName)|| 'Case'.equals(entityName)
        
        String apiType = e.data.get('ApiType'); 
        if('Account'.equals(entityName) ){ //&& (apiType != 'REST')
            if(numberOfRecords > 30){
                messageAlert(userId);
                return true;
            }
        }
        // For everything else don't trigger the policy. */
        return false;
    }
    
    public static void messageAlert(String loggedInUser)
    {             
        List<String> listUser= new List<String>();
        String recipientName='';
        String recipient ='';
        String ccRecipient='';        
        integer count =0;
        system.debug('Export Called');
        for(Transaction_alert_recipient__mdt tar:[select Email_id__c,User_Id__c,User_Name__c from Transaction_alert_recipient__mdt])
        {
            if(tar.User_Name__c!=null && tar.User_Name__c!='')
                recipientName=tar.User_Name__c;
            if(tar.Email_id__c!='' && tar.Email_id__c!=null)
                recipient= tar.Email_id__c;
            else if(tar.User_Id__c!='' && tar.User_Id__c!=null)
                listUser.add(tar.User_Id__c);
        }
        list <User> triggeredUser=[Select id,email,name from User where id=:loggedInUser limit 1];
        String userEmailId=String.valueOf(triggeredUser[0].email);
        String userName=String.valueOf(triggeredUser[0].name);
        System.debug('The CC address: '+ userEmailId +'\n'+ 'To Address '+recipient); 
        count++;
        system.debug('@@#' + count);
        if(isRepeated)
        {            
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[] {recipient};
                String[] ccAddresses = new String[] {userEmailId};   
                    mail.setToAddresses(toAddresses);
            mail.setCcAddresses( ccAddresses);
            mail.setSubject('Transaction Security Alert');
            mail.setPlainTextBody('Hi ' +recipientName+','+'\n' +'You are being alerted as ' +userName+ ' has triggered the DataExport event on Account(sObject) at '+system.now());
            system.debug('The mail formed'+ mail);
            mail.setTargetObjectId(triggeredUser[0].id);
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });            
            isRepeated=false;  
                     
        } 
       
    }   
        
    
}