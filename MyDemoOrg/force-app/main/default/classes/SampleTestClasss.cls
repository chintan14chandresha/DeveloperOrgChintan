@isTest(SeeAllData=true)
public class SampleTestClasss {
    static testMethod void test(){
        User u = [select id from User where id = '00528000000Itds'];
        System.runAs(u){
            UserAppInfo userAppInfo = [SELECT Id, AppDefinitionId FROM UserAppInfo WHERE UserId = :u.id LIMIT 1];
      		AppDefinition appDefinition = [SELECT DurableId, Label FROM AppDefinition Where DurableId = :userAppInfo.AppDefinitionId LIMIT 1];            
        }
    }
}