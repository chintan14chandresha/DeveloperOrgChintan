public class TestPrivateMethodAccess {
	public String testString;
    public Integer testInteger;
    
    private static Map<Integer,String> testAccessMethod(string input1,integer input2){
        Map<Integer,String> testMap = new Map<Integer,String>();
        testMap.put(input2, input1);        
        return testMap;
    }
}