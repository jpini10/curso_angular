import { NgModule } from '@angular/core';
 import {RouterModule, Routes} from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { authRoutingModule } from './auth/authRoutingModule';
import { NgChartsModule } from 'ng2-charts';
 const routes:Routes=[
  
    {path:'',redirectTo:'/dashboard', pathMatch:'full'}, //ruta por defecto

    {path:'**', component:NopagefoundComponent},

 ]
@NgModule({
 declarations:[],
imports:[
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    authRoutingModule,
    NgChartsModule,
],
exports:[RouterModule]
})
export class AppRoutingmodule{}