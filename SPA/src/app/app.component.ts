import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { menu } from './lib/menu';
<<<<<<< HEAD
import {} from 'ngx-bootstrap/ng2-bootstrap';
=======
import { isBs3 } from 'ngx-bootstrap/ng2-bootstrap';
>>>>>>> 311d2e1de6add5c4e25aa9ae31f4daefa4f64f09
import { NavigationList } from './app.navigation-list.component';
import { MenuList } from './lib/MenuList';
import { Routes } from '@angular/router';
//import { Inj } from 'angular2/angular2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MenuList]
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';
    navMenu: menu;
    public nodes: MenuList[] = [];
    constructor(private _http: Http) {
         //var navMenu = new menu();
    }

    ngOnInit() {
        
        this.GetMenuList().subscribe(r => {
            this.nodes = r;
            console.log(this.nodes);
            var navMenu = new menu();
<<<<<<< HEAD
            //console.log(r);
=======
>>>>>>> 311d2e1de6add5c4e25aa9ae31f4daefa4f64f09
        });
    }

    ngOnDestroy() {
        //Nothing here
    }

    private GetMenuList(): Observable<MenuList[]> {
<<<<<<< HEAD
        //return this._http.get('http://localhost:4300/GetNavigationList').map((r: Response) => <MenuList[]>r.json());
=======
>>>>>>> 311d2e1de6add5c4e25aa9ae31f4daefa4f64f09
        return this._http.get('http://localhost:4300/GetNavigationList').map((r: Response) => <MenuList[]>r.json());
    }


}

