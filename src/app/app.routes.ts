import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NestingComponent } from './nesting/nesting.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { DirectiveComponent } from './directive/directive.component';
import { BlogCentralCenterComponent } from './blog-central-center/blog-central-center.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FoxListComponent } from './fox-list/fox-list.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [ 
    { path: 'home', component: HomeComponent },
    { path: 'nesting', component: NestingComponent },
    { path: 'liste', component: ListFriendsComponent },
    { path: 'directive', component: DirectiveComponent},
    { path: 'blog', component: BlogCentralCenterComponent},
    { path: 'pokemon', component: PokemonListComponent},
    { path: 'renard', component: FoxListComponent},
    { path: 'inscription', component: RegisterComponent}
];