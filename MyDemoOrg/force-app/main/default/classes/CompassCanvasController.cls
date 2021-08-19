public class CompassCanvasController {
	
    public String environment { get; set; }
    public String parameterJSON { get; set; }
    
    public CompassCanvasController(ApexPages.StandardController controller) {
		environment = getEnvironmentName();
        Account tempAcc;
        Map<Id,Account> mapAccount = new Map<Id, Account>(
            [SELECT AccountNumber,AccountSource,Account_textarea__c,Active__c,AnnualRevenue,BillingAddress,BillingCity,
                                      BillingCountry,BillingGeocodeAccuracy,BillingLatitude,BillingLongitude,BillingPostalCode,BillingState,BillingStreet,ChannelProgramLevelName,
                                      ChannelProgramName,CleanStatus,CreatedById,CreatedDate,CustomerPriority__c,DandbCompanyId,Description,DunsNumber,Fax,fferpcore__ExemptionCertificate__c,
                                      fferpcore__IsBillingAddressValidated__c,fferpcore__IsShippingAddressValidated__c,fferpcore__MaterializedBillingAddressValidated__c,fferpcore__MaterializedShippingAddressValidated__c,
                                      fferpcore__OutputVatCode__c,fferpcore__SalesTaxStatus__c,fferpcore__TaxCode1__c,fferpcore__TaxCode2__c,fferpcore__TaxCode3__c,fferpcore__TaxCountryCode__c,
                                      fferpcore__ValidatedBillingCity__c,fferpcore__ValidatedBillingCountry__c,fferpcore__ValidatedBillingPostalCode__c,fferpcore__ValidatedBillingState__c,fferpcore__ValidatedBillingStreet__c,
                                      fferpcore__ValidatedShippingCity__c,fferpcore__ValidatedShippingCountry__c,fferpcore__ValidatedShippingPostalCode__c,fferpcore__ValidatedShippingState__c,
                                      fferpcore__ValidatedShippingStreet__c,fferpcore__VatRegistrationNumber__c,fferpcore__VatStatus__c,Id,ImageURL__c,Industry,IsCustomerPortal,IsDeleted,IsPartner,Jigsaw,JigsawCompanyId,
                                      LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,MasterRecordId,NaicsCode,NaicsDesc,Name,NumberOfEmployees,NumberofLocations__c,
                                      OwnerId,Ownership,ParentId,Phone,PhotoUrl,Potential_Value__c,Rating,Sample_City__c,Sample_Long_Text_Area_Field__c,ShippingAddress,ShippingCity,ShippingCountry,ShippingGeocodeAccuracy,
                                      ShippingLatitude,ShippingLongitude,ShippingPostalCode,ShippingState,ShippingStreet,Sic,SicDesc,SinglePicklist__c,Site,SLAExpirationDate__c,SLASerialNumber__c,SLA__c,SystemModstamp,
                                      Test_Text_Field_Sam__c,Test_Unique_Field__c,Test__c,TickerSymbol,Tradestyle,Type,UpsellOpportunity__c,Website,YearStarted FROM Account Limit 1]);
        
        for(Account acc  :mapAccount.values()){
            tempAcc = acc;
        }
        
    }
	
    private string getEnvironmentName() {
        organization org = [Select isSandbox from organization];
        if (!org.isSandbox == true) {
            return 'Prod';
        } else {
            return 'Sandbox';
        }    
    }
}