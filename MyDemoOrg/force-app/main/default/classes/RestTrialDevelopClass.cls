@RestResource(urlMapping='/oneAccount/*') //expose the class as REST class
global with sharing class RestTrialDevelopClass {
	
    @HttpGet //expose method as HTTP method
	global static List<Account> getRecord() {
		
        //list of 10 accounts random output
        List<Account> lstOneAccount = [SELECT id,name,AccountNumber,Rating FROM Account limit 10];
        
        //selected account list as filter is passed in the URL.
        RestRequest req = RestContext.request;
        String ratingValue = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        
        System.debug('body ' + req.requestBody);
        
        List<Account> lstColdGetAccount = [SELECT id,name,AccountNumber,Rating FROM Account WHERE Rating =: ratingValue];
        
        /*List<String> values = req.params.get('parm');
        List<Account> lstMultiperFilterGetAccount = [SELECT id,name,AccountNumber,Rating FROM Account WHERE Rating IN :values];
        
        if(lstMultiperFilterGetAccount.size() > 0){
            return lstMultiperFilterGetAccount;
        } else*/ if(lstColdGetAccount.size() > 0){
            return lstColdGetAccount;
        } else {
        	return lstOneAccount;    
        }
        
	}
    
    @HttpPost
    global static List<Account> fetchColdAccounts(List<String> filterValue){
        List<Account> lstColdAccount = [SELECT id,name,AccountNumber,Rating FROM Account WHERE Rating IN :filterValue];
        return lstColdAccount;
    }
}