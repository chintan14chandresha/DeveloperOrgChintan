({
    init: function(cmp, evt, helper) {
        var myPageRef = cmp.get("v.pageReference");
        var firstname = myPageRef.state.c__firstname;
        cmp.set("v.firstname", firstname);
        
        var ani = myPageRef.state.c__ani;
        cmp.set("v.ani", ani);
        
        var workgroup = myPageRef.state.c__workgroup;
        cmp.set("v.workgroup", workgroup);
        
        var direction = myPageRef.state.c__direction;
        cmp.set("v.direction", direction);
    }
})