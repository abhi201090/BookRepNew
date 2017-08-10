import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';

@Component({
    selector:'',
    template:''
})

export class Fake{
    id:number;
    title:string;
    sub:any;
    constructor(private route:ActivatedRoute, private _http:Http, private router: Router){

    }

    ngOnInit(){
         this.sub = this.route.params.subscribe(params=>{
            this.id = params['id'];
            this.title = params['title'];
            //this.router.navigate(['/navigation-content', {id:this.id, title:this.title}]);
            this.router.navigate(['/navigation-content', this.id,this.title]);
        });
    }

    ngOnDestroy(){

    }

    
}