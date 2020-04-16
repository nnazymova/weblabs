import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanylistComponent } from './companylist/companylist.component';
import { VacancylistComponent } from './vacancylist/vacancylist.component';


const routes: Routes = [
  { path: '', component: CompanylistComponent },
  { path: 'company/:id', component: VacancylistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
