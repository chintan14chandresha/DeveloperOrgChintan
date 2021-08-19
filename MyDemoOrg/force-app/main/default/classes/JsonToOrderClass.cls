/*
 * Title      		 : This class is created to fetch data from JSON String which came from web service.
 * created at 		 : 08-07-2016
 * Purpose           : Salesforce to Wordpress Integration 
 * Dependent Classes : OrderManage.apxc
*/
public class JsonToOrderClass {
    public Order order;
    public class Order{
        // Member Variables
        public String wordpress_order_id;
        public String parent_id;
        public String status;
        public String order_key;
        public String order_currency;
        public String version;
        public String prices_include_tax;
        public String date_created;
        public String date_modified;
        public String customer_id;
        public String discount_total;
        public String discount_tax;
        public String shipping_total;
        public String shipping_tax;
        public String cart_tax;
        public String total;
        public String total_tax;
        public String billing;
        public String shipping;
        public String payment_method;
        public String payment_method_title;
        public String set_paid;
        public String transaction_id;
        public String customer_ip_address;
        public String customer_user_agent;
        public String created_via;
        public String customer_note;
        public String date_completed;
        public String date_paid;
        public String cart_hash;
        public String line_items;
        public String tax_lines;
        public String shipping_lines;
        public String fee_lines;
        public String coupon_lines;
        public LineItem lineitem;
        public TaxLine taxline;
        public ShippingLine shippingline;
        public FeeLine feeline;
        public CoupanLine coupanline;
    }
    
    public class LineItem{
        // Member Variables
        public String LineItem_id;
        public String name;
        public String sku;
        public String product_id;
        public String variation_id;
        public String quantity;
        public String tax_class;
        public String price;
        public String subtotal;
        public String subtotal_tax;
        public String total;
        public String total_tax;
        public String taxes;
        public String meta;
    }
	
    public class TaxLine{
        // Member Variables
        public String id;
        public String rate_code;
        public String rate_id;
        public String label;
        public String compound;
        public String tax_total;
        public String shipping_tax_total;
    }
    
    public class ShippingLine{
        // Member Variables
        public String id;
        public String method_title;
        public String method_id;
        public String total;
        public String total_tax;
        public String taxes;
    }
    
    public Class FeeLine{
        // Member Variables
        public String id;
        public String name;
        public String tax_class;
        public String tax_status;
        public String total;
        public String total_tax;
        public String taxes;
    }
    
    public Class CoupanLine{
        // Member Variables
        public String id;
        public String code;
        public String discount;
        public String discount_tax;
    }
    
    public static JsonToOrderClass parse(String OrderJson){
        /* 
         * Below Statement will return an Object which has deserialized JSON String in it.
         * we can use this returned object to input values in the variable members of above created classes 
         * for further use of the data got from JSON String.
        */
        return (JsonToOrderClass) System.JSON.deserialize(OrderJson, JsonToOrderClass.class); 
    }       
}