@RestResource(urlMapping='/ContentDoc/*')
    global class ContentDocController {
    @HttpGet
    global static void getBlob() {
   RestRequest req = RestContext.request;
    RestResponse res = RestContext.response;
    res.addHeader('Content-Type', 'application/json');
    res.addHeader('Access-Control-Allow-Origin', '*');
    res.addHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        Id conId= RestContext.request.params.get('ContentDocId') ;
        system.debug(conId);
    ContentVersion a = [SELECT Title,ContentModifiedById,ContentDocumentId,FileExtension,FileType,ContentSize,ContentUrl,Id,VersionData,VersionNumber FROM ContentVersion where ContentDocumentId=:conId];
        system.debug(a);
       if(a.FileType.equals('WORD_X')){
            res.addHeader('Content-Type','application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        }else if(a.FileType.equals('PDF')){
            res.addHeader('Content-Type','application/pdf');
        }else if(a.FileType.equals('EXCEL_X')){
            res.addHeader('Content-Type','application/vnd.ms-excel');
        }else if(a.FileType.equals('RTF')){
            res.addHeader('Content-Type','application/rtf');
        }else if(a.FileType.equals('MP4')){
            res.addHeader('Content-Type','video/mp4');
        }else if(a.FileType.equals('EXCEL')){
            res.addHeader('Content-Type','application/vnd.ms-excel');
        }else if(a.FileType.equals('PNG')){
            res.addHeader('Content-Type','image/png');
        }else if(a.FileType.equals('POWER_POINT_X')){
            res.addHeader('Content-Type','application/vnd.openxmlformats-officedocument.presentationml.presentation');
        }else if(a.FileType.equals('POWER_POINT')){
            res.addHeader('Content-Type','application/vnd.ms-powerpoint');
        }else if(a.FileType.equals('JPG')){
            res.addHeader('Content-Type','image/jpg');
        }else if(a.FileType.equals('CSV')){
            res.addHeader('Content-Type','application/csv');
        }else if(a.FileType.equals('BMP')){
            res.addHeader('Content-Type','image/bmp');
        }else if(a.FileType.equals('GIF')){
            res.addHeader('Content-Type','image/gif');
        }else if(a.FileType.equals('TIF')){
            res.addHeader('Content-Type','image/tiff');
        }else if(a.FileType.equals('EPS')){
            res.addHeader('Content-Type','application/postscript');
        }else if(a.FileType.equals('WORD')){
            res.addHeader('Content-Type','application/msword');
        }else{
             res.addHeader('Content-Type','application/MPEG4');
        }
        
        
   // RestResponse res = RestContext.response;
  /* RestResponse res = RestContext.response;

    res.addHeader('Access-Control-Allow-Origin','*');

    res.addHeader('Content-Type', 'application/json');

     res.addHeader('Accept', 'application/json');
     res.addHeader('Access-Control-Allow-Headers','Content-Type, Accept');
      res.addHeader('Access-Control-Allow-Headers','GET, POST, PUT, DELETE');
    res.addHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');*/
   
     //res.addHeader('Content-Type',a.FileType);
     //res.addHeader('Content-Type','application/doc');  
     //res.addHeader('Content-Type','application/docx');  
     //res.addHeader('Content-Type','application/vnd.openxmlformats-officedocument.wordprocessingml.document');
     //res.addHeader('Content-Type','application/pdf');
     res.addHeader('Cache-Control','must-revalidate, post-check=0, pre-check=0');
  
    String afterblob = EncodingUtil.base64Encode(a.VersionData);
   res.responseBody =EncodingUtil.base64Decode(afterblob); 
        System.debug(res);
    }
    }