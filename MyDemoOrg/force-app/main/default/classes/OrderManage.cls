@RestResource(urlMapping='/Order/*')
global with sharing class OrderManage {
    @HttpPost
    global static String createOrder(String Order){
        RestRequest req = RestContext.request; 
        String orderJson = req.requestBody.toString();
        System.debug(orderJson);
        Account myAccount = new Account();
        // Order__c myOrder = new Order__c();
        JsonToOrderClass parsedOrder = JsonToOrderClass.parse(orderJson);
        String jsonOrder = JSON.serialize(parsedOrder);
        try{
            //myAccount.name = parsedOrder
        }   catch(Exception e){
            return '{status:"404"}';
        }
        return jsonOrder;
    }
}