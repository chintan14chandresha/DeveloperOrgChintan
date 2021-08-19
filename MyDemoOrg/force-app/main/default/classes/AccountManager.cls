@RestResource(urlMapping='/Account/*')
global with sharing class AccountManager {
    
    @HttpGet
    global static Account getAccountById() {
        RestRequest req = RestContext.request;        
        String accId = req.requestURI.substring(
                                  req.requestURI.lastIndexOf('/')+1);
		//req.addHeader('Authorization', 'OAuth '+UserInfo.getSessionId());
		//ExecuteAnonymousResult executeAnonymous(String code);
        Account result = 
                       [SELECT Name,AccountNumber,Phone,NumberOfEmployees
                        FROM Account
                        WHERE Id = :accId];
        return result;
    }
    
    @HttpPost
    global static String createAccount(String AccName,String AccNumber,String AccPhone){
        Account m = new Account(Name = AccName,AccountNumber = AccNumber,Phone = AccPhone);
        insert m;
        return m.Id;
    }    
}