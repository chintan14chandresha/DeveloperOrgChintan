public class PdfPreviewController {
	
    
    public PdfPreviewController(ApexPages.StandardController Account){
        getIntegers();
    }
    
    public List<Integer> getIntegers() {
        List<Integer> arrInt = new List<Integer>();
        for(Integer i=1;i<=100;i++){            
            arrInt.add(i);
        }
        //return new Integer[]{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,};
        return arrInt;
    }
}