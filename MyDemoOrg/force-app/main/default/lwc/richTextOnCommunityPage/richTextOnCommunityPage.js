import { LightningElement,api, track, wire } from 'lwc';

import createFeedRecord from '@salesforce/apex/RichTextOnCommunityController.createFeedRecord';

import feedDesciption from '@salesforce/schema/FeedItem.Body';


export default class RichTextOnCommunityPage extends LightningElement {

    formats = ['font', 'size', 'bold', 'italic', 'underline',
        'strike', 'script', 'code', 'code-block', 'list', 'indent', 'align', 'link',
        'image', 'clean', 'table', 'header', 'color', 'background'];

    qTitle;
    myVal;
    @api api_MyVal;

    titleChange(event) {
        this.qTitle = event.target.value;
    }

    bodyChange(event){
        this.myVal = event.target.value;
    }

    get myVal() {
        return '**Hello!**';
    }

    handleClick(){

        createFeedRecord({
            rtitle: this.qTitle,
            rdescription: this.myVal
        });
    }

}