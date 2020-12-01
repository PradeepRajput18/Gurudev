import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SheetsComponent } from './sheets/sheets.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"sheets",component:SheetsComponent},
  {path:"about",component:AboutComponent},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
