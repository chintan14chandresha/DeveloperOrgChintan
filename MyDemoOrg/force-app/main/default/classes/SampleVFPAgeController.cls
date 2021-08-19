public class SampleVFPAgeController {
    public String partner{get;set;}
    
    public SampleVFPAgeController(){
        partner = System.currentPageReference().getParameters().get('partner');
        if(partner!=null){
            SampleVFPAgeController.changePage();
        }
    }
    
    public static PageReference changePage(){
        return Page.SampleVFPAge;
    } 
}