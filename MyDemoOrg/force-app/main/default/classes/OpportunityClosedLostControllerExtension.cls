public class OpportunityClosedLostControllerExtension{
public Opportunity Oppty;    
public ApexPages.StandardController stdController;
public OpportunityClosedLostControllerExtension (ApexPages.StandardController controller) {
        
        stdController=controller;
        this.Oppty = (Opportunity)stdcontroller.getRecord(); 
        
        if(Oppty.IsClosed==true)
        {
            ApexPages.Message usrMsg = new ApexPages.Message(ApexPages.Severity.ERROR, 'Opportunity is already marked as Closed Lost');
            ApexPages.addMessage(usrMsg);  
            
        }
    
    
    } 
    public PageReference save(){
        PageReference pageRef = ApexPages.currentPage();
        return pageRef;
    }
}