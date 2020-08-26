import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginModule } from './login/login.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrendingComponent } from './trending/trending.component';
import { MatMenuModule } from '@angular/material/menu';
import { SearchComponent } from './search/search.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatInputModule } from '@angular/material/input';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TrendingComponent,
    SearchComponent,
    FavouritesComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LoginModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    NgMatSearchBarModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
