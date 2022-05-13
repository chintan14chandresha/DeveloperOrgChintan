public with sharing class ATest { 
    
    @AuraEnabled
    public static ATestObj__c saveObj(ATestObj__c tst) {
        try {
            if (String.isBlank(tst.Id)) {
	            insert tst;
            } else {
                update tst;
            }
		} catch (Exception e) {
            AuraHandledException ex = new AuraHandledException(e.getMessage());
            ex.setMessage(e.getMessage());
            throw ex;
        }
        return tst;
    }
    
// ******************* getPicklistOptions *******************
    @AuraEnabled
    public static Map<String,String> getPicklistOptions(String sObjectName, String fieldName, List<String> filter) {
        Map<String,String> opts = new Map<String,String>();
        try {
            Map<String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
            Map<String, Schema.SObjectField> fieldMap = schemaMap.get(sObjectName).getDescribe().fields.getMap();
            List<Schema.Picklistentry> fld = fieldmap.get(fieldName).getDescribe().getpicklistValues();
            for(integer i=0;i<fld.Size();i++){
                if (filter.contains(fld[i].getLabel()) || filter.isEmpty()) {
                    //In Global Value Set, Value = API Name column and Label = Value column
                    //for select options, Value (API Name) = key and Label (Value) = value
                    opts.put(fld[i].getValue(), fld[i].getLabel());
                }
            }
		} catch (Exception e) {
            AuraHandledException ahe = new AuraHandledException(e.getMessage());
            ahe.setMessage(e.getMessage());
            throw ahe;
        }
        return opts;
    }
    
    
    
}
