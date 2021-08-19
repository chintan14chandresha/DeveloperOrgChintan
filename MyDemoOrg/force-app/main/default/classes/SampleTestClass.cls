@isTest(SeeAllData=true)
public class SampleTestClass {
    static testMethod void sampleOne(){
        Test.startTest() ;
        User u = [select id from User where id = '00528000000IsbM'];
        Job_Posting__c sam = [select id,Sample_Text__c from Job_Posting__c where id = 'a0K0I00000RYIL6UAP'];
        System.runAs(u){
            sam.Sample_Text__c = 'test';
            update sam;
        }
        Test.stopTest() ;
    } 
}