public class PostalAPIWrapperClassic {

    public String Message;

    public String Status;

    public List<PostOffice> PostOffice;

   

    public class PostOffice {

        public String Name;

        public String Description;

        public String BranchType;

        public String DeliveryStatus;

        public String Circle;

        public String District;

        public String Division;

        public String Region;

        public String State;

        public String Country;

    }

   

    public static PostalAPIWrapperClassic deserialize(String res){

        return (PostalAPIWrapperClassic) System.JSON.deserialize(res, PostalAPIWrapperClassic.class);

    }

}