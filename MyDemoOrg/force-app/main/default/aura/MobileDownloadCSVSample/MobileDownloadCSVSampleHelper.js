({
    
    doInit : function(component, event, helper) {
        // 1. Calling method "getSampleJSON()" and parsing it into JSON object.
        var jsonData = JSON.parse(helper.getSampleJSON());
        // 2. Setting parsed data in attribute "gridData".
        component.set("v.gridData",jsonData);
    },
    getSampleJSON : function(){
        // 3. Variable declaration and assigning value to show in component.
        var jsonStr = '{"rows":[{"vals":[{"val":"Salesforce","cssClass":""},{"val":"SFO","cssClass":""},{"val":"info@Salesforce.com","cssClass":""},{"val":"8602229632","cssClass":"responsiveHide"}]},{"vals":[{"val":"Microsoft","cssClass":""},{"val":"SFO","cssClass":""},{"val":"info@microsoft.com","cssClass":""},{"val":"8602283222","cssClass":"responsiveHide"}]},{"vals":[{"val":"SAP","cssClass":""},{"val":"SFO","cssClass":""},{"val":"info@SAP.com","cssClass":""},{"val":"8600942222","cssClass":"responsiveHide"}]},{"vals":[{"val":"Google","cssClass":""},{"val":"SFO","cssClass":""},{"val":"info@Google.com","cssClass":""},{"val":"8602479222","cssClass":"responsiveHide"}]}],"headers":[{"title":"ClientName","isSortable":false,"dataType":"","cssClass":""},{"title":"Address","isSortable":false,"dataType":"","cssClass":""},{"title":"Email","isSortable":false,"dataType":"","cssClass":""},{"title":"Mobile","isSortable":false,"dataType":"","cssClass":"responsiveHide"}]}';
        return jsonStr;
    }           
})