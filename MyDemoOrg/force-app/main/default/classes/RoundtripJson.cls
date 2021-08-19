@RestResource(urlMapping='/transposeJSON/*')
global with sharing class RoundtripJson {
	@HttpPost
    global static String transposeJson(String inputJson){
        
        return 'a';
    }
}