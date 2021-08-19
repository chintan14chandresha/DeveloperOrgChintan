global class OppFieldHistory implements Database.Batchable<sOBject>, Database.Stateful{
   
    global string excelHeader = 'OpportunityId, OldValue, NewValue \n';
    global string finalstr = '';
    global blob csvBlob;
    global string csvname = 'UpdatedEntityrecords.csv';
   
    //constructor
    global OppFieldHistory(){
        finalstr = excelHeader;
    }
    //start method
    global Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator([SELECT OpportunityId, OldValue, NewValue FROM OpportunityFieldHistory where Field='Stagename']);
    }
 
    //execute
    global void execute(Database.BatchableContext BC, List<OpportunityFieldHistory> scope){
        string recordString;
        for(OpportunityFieldHistory oppFieldHist: scope){
            
           recordString = oppFieldHist.OpportunityId +',' + oppFieldHist.OldValue +','+ oppFieldHist.NewValue +'\n';
            finalstr =+ finalstr + recordString;
         //   oppFieldHist.JobItemsProcessed + ',' +oppFieldHist.JobType + ',' + oppFieldHist.TotalJobItems+','+ oppFieldHist.CreatedBy.Email + '\n';
        }
    }
    
    //finish
    global void finish (Database.BatchableContext BC){
       
        //Attachment code here
        Messaging.EmailFileAttachment csvAttc = new Messaging.EmailFileAttachment();
        csvBlob = Blob.valueOf(finalstr);
        csvAttc.setFileName(csvname);
        csvAttc.setBody(csvBlob);
       
        //email sending code
        Messaging.Singleemailmessage mail = new Messaging.Singleemailmessage();
        mail.setToAddresses((new String[] {'chintanchandresa@gmail.com'}));
        //mail.setReplyTo('noreply@privatebudget.com');
        mail.setSenderDisplayName('Batch Class Errors');
        mail.setSubject('Batch Class Errors');
        mail.setBccSender(false);
        mail.setUseSignature(false);
        mail.setPlainTextBody('This is a test');
        mail.setFileAttachments(new Messaging.EmailFileAttachment[]{csvAttc});
        system.debug('@@@@ sendEmail - mail : ' + mail);
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
 
    }
}