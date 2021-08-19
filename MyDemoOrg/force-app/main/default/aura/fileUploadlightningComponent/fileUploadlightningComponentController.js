({
    handleUploadFinished: function (cmp, event) {
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        alert("Files uploaded : " + uploadedFiles.length);
        var fileIds=[];
        fileIds = cmp.get('v.fileIds');
        uploadedFiles.forEach(function(file){
            fileIds.push(file.documentId);
            console.log("++"+fileIds);
        });
        cmp.set('v.fileIds', fileIds);
        cmp.set('v.showDocuments', true);
    }
})