import { Component, Input, OnDestroy, OnInit, Directive } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { menu } from './lib/menu';
import { isBs3 } from 'ngx-bootstrap/ng2-bootstrap';
import { MenuList } from './lib/MenuList';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-list',
  templateUrl: './app.navigation-list.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuList]
})

export class NavigationList  {
  navMenu: menu;
  static count: number = 0;
  constructor(private router: Router, private _http: Http) {
  }

  @Input('nodeList')

  nodes: MenuList[];
  public MenuOnClick = (id,title) => {
    //this.router.navigate(['/fake', {id: id, title: title}]);
    this.router.navigate(['/fake', id, title]);
  };
}



