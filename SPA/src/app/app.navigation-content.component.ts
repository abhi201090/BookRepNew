import {Component, OnInit, OnDestroy} from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptionsArgs, RequestMethod, Request, RequestOptions } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';
import {Links} from './lib/links';
import {UploadModal} from './app.upload-modal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
    selector:'navigation-content',
    templateUrl:'./app.navigation-content.component.html',
    styleUrls:['./app.component.css']
})

export class NavigationContent implements OnInit,OnDestroy {
    id:number;
    sub:any;
    title:string;
    links:any;
    bsModalRef: BsModalRef;
    constructor(private route:ActivatedRoute, private _http:Http,private bsModalService:BsModalService){

    }

    ngOnInit(){
        console.log('content');
        this.sub = this.route.params.subscribe(params=>{
            this.id = params['id'];
            this.title = params['title'];
        });
        this.GetContent(this.id).subscribe(r=>{
            this.links = r;
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    private GetContent(id):Observable<any>{
      return this._http.get('http://localhost:4300/GetNavigationContent/'+id).map((r:Response) => r.json());
    }

    private ShowModal(){
      
        this.bsModalService.show(UploadModal);
    }
}