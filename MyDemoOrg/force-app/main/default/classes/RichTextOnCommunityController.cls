public without sharing class RichTextOnCommunityController {
    public RichTextOnCommunityController() {

    }

    @AuraEnabled
    public static string createFeedRecord(String rtitle,String rdescription){
        String commId = [Select Id from Network where Name = 'TESTSF'].Id;
        FeedItem fi = new FeedItem();
        fi.Title = rtitle;
        fi.Body = rdescription;
        fi.IsRichText = true;
        fi.NetworkScope = commId;
        fi.Type = 'QuestionPost';
        fi.ParentId = UserInfo.getUserId();
        fi.Status = 'Published';

        try{
            insert fi;
        }catch(DMLException e){
            return e.getMessage();
        }
        return fi.Id;
    }
}