public class CustomLinkController {
    @AuraEnabled
    public static Contact getContact(String contactId){
        Contact con = [SELECT id,name,phone,email from contact where id = :contactId];
        
        if(con != null){
            return con;
        }else{
            return null;
        }
        
    }

}