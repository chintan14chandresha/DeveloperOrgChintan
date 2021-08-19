public class CodeTestingSampleClass {
        
    public static void samplemethod(){
        List<InnerClass> lstofinner = new List<InnerClass>();
        for(Account acc: [SELECT id,name,Industry,Multi_Language__c,Account_textarea__c FROM Account limit 10]){
            InnerClass test = new InnerClass();
            test.firstmember = acc.name;
            test.secondmember = acc.Account_textarea__c;                        
            test.lstofString = (List<String>) acc.Multi_Language__c.split(';');
            lstofinner.add(test);
        }
        System.debug('lstofinner: '+lstofinner);
    }
    
    public class InnerClass{
        String firstmember;
        String secondmember;
        List<String> lstofString = new List<String>();
    }
}