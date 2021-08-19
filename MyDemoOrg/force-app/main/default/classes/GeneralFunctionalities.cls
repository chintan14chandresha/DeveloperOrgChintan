public with sharing class GeneralFunctionalities {
    public GeneralFunctionalities() {
        //Code here to initialise the class.
    }

    /* 
     * Handling null for the data mapping to create JSON response for the API.
    */
    public static String handleEmptyNodes(String inputParam){
        if (inputParam != null || !String.isEmpty(inputParam)) {
            return inputParam;
        } else return '';
    }
}