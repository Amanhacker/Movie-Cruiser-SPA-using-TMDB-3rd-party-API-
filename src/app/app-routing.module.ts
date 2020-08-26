import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { TrendingComponent } from './trending/trending.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'trending',
    component: TrendingComponent
  },
  {
    path: 'searchResults',
    component: SearchResultsComponent
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    redirectTo: '/trending',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
