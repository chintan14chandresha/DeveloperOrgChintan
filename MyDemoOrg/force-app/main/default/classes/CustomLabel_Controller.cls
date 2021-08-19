public class CustomLabel_Controller {
   @AuraEnabled
    public static string getCommunityBaseURL(string communityName)
    {
        Network objNetwork = [SELECT
            Id, 
            Name
        FROM
            Network
        WHERE
            Name = : communityName
        limit 1];
        string url = Network.getLoginUrl(objNetwork.id);
        return url.removeEnd('/s/login');
    }

}