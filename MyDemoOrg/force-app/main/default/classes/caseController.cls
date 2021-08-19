Public class caseController{

     public Account cas {get; set;}
     private ApexPages.StandardController controller {get; set;}
     public string caseOwnId{get;set;}

     public caseController(ApexPages.StandardController controller) {
        this.controller = controller;
        cas = (Account) controller.getRecord();
         if(Schema.sObjectType.Account.fields.Type.isAccessible()){
        string caseOwnId = cas.Type;     
         }
        
}
}