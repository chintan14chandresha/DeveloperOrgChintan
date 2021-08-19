@isTest
public class listTest {
    public static testMethod void listTest(){
	User u = [select id, Name from User where firstname = 'Akash'];
	System.runAs(u) {
 		list<ListView> listList = [SELECT id, Name, DeveloperName FROM ListView
WHERE sObjectType = 'Account' AND Id = '00B0I00000BEsODUA1' ORDER By LastViewedDate DESC NULLS LAST ];
	for(ListView lv:listList){
	system.debug('>' +lv);
	}   
    }}


}