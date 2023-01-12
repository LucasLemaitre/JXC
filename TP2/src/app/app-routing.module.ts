import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch:"full"},
  {path: 'monsters', component: ListComponent},
  {path: 'creatures', component: ListComponent},
  {path: 'entry/:id', component: DetailItemComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: HomeComponent}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
