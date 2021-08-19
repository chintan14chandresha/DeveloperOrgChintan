public with sharing class ListViewScope {
    
    public static void displayViews(){
     	List<ListView> lsttemp = [SELECT id, Name, DeveloperName FROM ListView USING SCOPE Mine WHERE sObjectType = 'Account'];    
    	System.debug('lsttemp: '+lsttemp);   
    }
}