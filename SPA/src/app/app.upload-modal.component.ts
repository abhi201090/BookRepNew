import {Component, ElementRef} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { Http, Response, Headers, URLSearchParams, RequestOptionsArgs, RequestMethod, Request, RequestOptions } from '@angular/http'; 


@Component({
    selector:'FileUpload',
    templateUrl:'./app.upload-modal.component.html',
    styleUrls:['./app.component.css']
})

export class UploadModal{
    constructor( public bsModalRef:BsModalRef, private elem:ElementRef, public _http:Http){
        
    }

    public Close(){
        let title = this.elem.nativeElement.querySelector("#title").value;
        let author = this.elem.nativeElement.querySelector("#author").value;
        let files = this.elem.nativeElement.querySelector("#file").files;
        var formdata = new FormData();
        let headers = new Headers();
        headers.append('Content-Type','multipart/form-data');
        let options = new RequestOptions({headers:headers});
        formdata.append('title',title);
        formdata.append('author',author);
        formdata.append('file',files[0],files[0].name);
        this._http.post('http://localhost:4300/upload',formdata, options).subscribe(r => console.log(r.json()));
        console.log(JSON.stringify(formdata));
        //this.close();
        //this.bsModalRef.hide();
    }

}