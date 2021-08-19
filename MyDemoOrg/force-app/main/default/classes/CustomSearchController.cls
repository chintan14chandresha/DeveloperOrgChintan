public class CustomSearchController {
    public String sSearchBox {get; set;}
    public Boolean showContent {get; set;}
    
    public CustomSearchController(){
//        this.sSearchBox = 'Chintan';
        this.showContent = false;
    }
    
    public void display(){
        this.showContent = true;
    }
}