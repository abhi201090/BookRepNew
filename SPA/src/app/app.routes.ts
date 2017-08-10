import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {RouteTest} from './app.route-test.component';
import {Home} from './app.home.component';
import {NavigationContent} from './app.navigation-content.component';
import { Fake } from './app.fake.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:Home},
    {path:'fake/:id/:title', component:Fake},
    {path:'navigation-content/:id/:title', component:NavigationContent}
];

export const appRoutingProviders:any[] = [];

export const routing = RouterModule.forRoot(routes);