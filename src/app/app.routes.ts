import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NestingComponent } from './nesting/nesting.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { DirectiveComponent } from './directive/directive.component';

export const routes: Routes = [ 
    { path: 'home', component: HomeComponent },
    { path: 'nesting', component: NestingComponent },
    { path: 'liste', component: ListFriendsComponent },
    { path: 'directive', component: DirectiveComponent}
];