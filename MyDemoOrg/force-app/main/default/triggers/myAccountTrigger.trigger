trigger myAccountTrigger on Account (before insert,before update,after insert, after update) {
	private static final String DEBUG_MESSAGE = 'Account Description from CHINTAN TEST CODE: ';
    List<Contact> listofContact = new List<Contact>();
    AccountDynamicHandler handler = new AccountDynamicHandler();

	//sample code to be removed time: 11:50 AM 4/20/2021

    for(Account acc: Trigger.new){
        //Before Trigger Event
        if(Trigger.isBefore){

            //sample code to be removed time: 11:50 AM 4/20/2021---------------------
            if(acc.SLA_Replica__c != null || acc.SLA_Replica__c != ''){
                acc.SLA__c = acc.SLA_Replica__c;
            }
			//sample code to be removed time: 11:50 AM 4/20/2021---------------------

            //Update "Description" and "Owner" of Account when description is empty.
            if(acc.Description == null || acc.Description == ''){
                acc.Description = 'Test';
                acc.ownerId = '00528000000IqFI';
            }

            //Update "Account Textarea" when "SLA" is 'Gold'.
            if(acc.SLA__c == 'Gold'){
                acc.Account_textarea__c = 'test@gmail.com';
            }

            if(acc.Type == 'Customer' && acc.SLA__c == 'Gold'){
                acc.AccountSource = 'Web';
            }
        }

        //After trigger event
        //Create contact when Banking-Industry Account record is created.
        if(Trigger.isAfter && acc.Industry == 'Banking'){
            Contact c = new Contact();
            c.LastName = acc.Name;
            c.Phone = acc.Phone;
            c.AccountId = acc.Id;
            listofContact.add(c);
        }
    }

    //Insert contacts for the Account records that are of type Banking-Industry.
    if(Trigger.isAfter) insert listofContact;

}