import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { SearchNewsComponent } from './search-news/search-news.component';

const routes: Routes = [
  { path: 'Home', component: TopStoriesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'Search', component: SearchNewsComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
