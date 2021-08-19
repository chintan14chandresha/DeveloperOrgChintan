@isTest(SeeAllData=true)
public class TestListViewScope {
    static testmethod void myTestMethod1(){
        Boolean check = false;
        if(check){
        	ListViewScope.displayViews();    
        }else{
         	User u = [select id from user where FirstName = 'Anushka'];
            System.runAs(u){
                ListViewScope.displayViews();
            }   
        }        
    }
}