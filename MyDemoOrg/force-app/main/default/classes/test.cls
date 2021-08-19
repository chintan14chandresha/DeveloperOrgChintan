public without sharing class test {

    public test(ApexPages.StandardController controller) {

    }

    
    public static void methodCall(){
        String netId = network.getNetworkId();
        dummyFutureCall('0010I00002GitdvQAB',netId);        
    }

    @future
    public static void dummyFutureCall(Id BasketId,String netValue){
        system.debug('**networkId In method : ' + network.getNetworkId());  
        system.debug('**networkId In method : ' + netValue);  
        ContentVersion cv = new ContentVersion();
        cv.Title = 'Test Document';
        cv.PathOnClient = 'TestDocument.pdf';
        cv.VersionData = Blob.valueOf('Test Content');
        cv.IsMajorVersion = true;
        cv.NetworkId = netValue;
        Insert cv;  
        //Get Content Documents
        List<ContentVersion> docList = [SELECT Id, contentDocumentId FROM ContentVersion where id =: cv.id ];
         
        //Create ContentDocumentLink 
        ContentDocumentLink cdl = New ContentDocumentLink();
        cdl.LinkedEntityId = basketId;
        cdl.ContentDocumentId = docList[0].contentDocumentId;
        cdl.shareType = 'V';
        Insert cdl; 
    }

}