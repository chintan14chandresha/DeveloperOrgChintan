public class ContactPhotoExtension {

public Contact cont;
public blob picture {get;set;}

 public ContactPhotoExtension(ApexPages.StandardController st){
  this.cont = (Contact) st.getRecord();
 
 }
 public PageReference save() {
 PageReference pr;
  	cont.CSAT__c = true;
  	update cont;
     
     pr = new PageReference('/'+cont.id);
  return pr;
 } 

}