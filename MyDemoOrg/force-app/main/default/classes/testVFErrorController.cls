public class testVFErrorController { 

public Opportunity opp {get; set;} 

public testVFErrorController() { 
opp = new Opportunity();        
} 

public void updateTestField() {
    
if (opp.TrackingNumber__c != null && opp.TrackingNumber__c.length() >= 25) { 
	opp.TrackingNumber__c = opp.TrackingNumber__c.substring(0,25) + ' Test'; 
 }else { 
	opp.TrackingNumber__c += ' Test'; 
  }
   
} 

}