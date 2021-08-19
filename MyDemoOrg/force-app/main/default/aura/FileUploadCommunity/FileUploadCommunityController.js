({
    handleUploadFinished: function (cmp, event) {
        // This will contain the List of File uploaded data and status
        var uploadedFiles = event.getParam("files");
        alert("Files uploaded : " + uploadedFiles.length);
    },
    
    /*shareFileWithRecord: function (component, event) {
        // get the uploaded files and create a list of ContentDocumentIds
        const that = this;
        var uploadedFiles = event.getParam("files");
        var uploadedDocumentIds = [];
        
        uploadedFiles.forEach((d) => {
            uploadedDocumentIds.push(d.documentId);
        });

        // call server side method to create ContentDocumentLink records
        this.callApexFunction(component, 'c.shareFiles', {
            'documentIds': uploadedDocumentIds,
            'recordId': component.get('v.contactId'),
            'isProfilePhoto': false
        })
            .then($A.getCallback((result) => {

                var evt = component.getEvent("fileUploadCompleteEvt");
                if (!$A.util.isUndefinedOrNull(evt)) {
                    evt.fire();
                }
                that.reloadActivityFeedContainer();
            }))
            .catch($A.getCallback((error) => {
                that.console.error(error);
            }));


    }*/
});