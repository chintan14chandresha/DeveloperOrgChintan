public class TestUserRoleClass {
    
    List<Opportunity> lstOpp = [select id,ownerid,owner.UserRole.name from Opportunity limit 10];

}