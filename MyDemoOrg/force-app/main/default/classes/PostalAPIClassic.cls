public class PostalAPIClassic {
	public String endPoint = 'https://api.postalpincode.in/pincode/516360';

    public String responseBody;

   

    public void postalGetMethod(){

        Http h = new Http();

        HttpRequest req = new HttpRequest();

        req.setMethod('GET');

        req.setEndpoint(endPoint);

        req.setTimeout(12000);

        HttpResponse res = h.send(req);

        responseBody = res.getBody();

        system.debug('##########'+responseBody);

       

        PostalAPIWrapperClassic deserializeobj = PostalAPIWrapperClassic.deserialize(responseBody);

        system.debug('#########'+deserializeobj);

    }
}