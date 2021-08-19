trigger makepublic on EmailMessage (before insert) {    
	System.debug('Trigger.New Before Logic'+Trigger.new);
    for(EmailMessage temp : trigger.new){
        if(temp.TextBody != null){
            temp.TextBody = ' Added via trigger.';
        }
    }        
    
    System.debug('Trigger.New After Logic'+Trigger.new);
}