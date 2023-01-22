    import { Routes, RouterModule } from '@angular/router';
    import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { NgChartsModule } from 'ng2-charts';
import { AccountSetingsComponent } from './account-setings/account-setings.component';
    
    
    const routes: Routes = [
        {
            path:'dashboard', 
            component:PagesComponent,
            children:[
        {path:'', component: DashboardComponent},
        {path:'progress', component: ProgressComponent},
        {path:'grafica1', component:Grafica1Component},
        {path:'setting', component:AccountSetingsComponent},
            ]   
        },
        //{ path: 'path/:routeParam', component: MyComponent },
        //{ path: 'staticPath', component: ... },
        //{ path: '**', component: ... },
        //{ path: 'oldPath', redirectTo: '/staticPath' },
        //{ path: ..., component: ..., data: { message: 'Custom' }
    ];
    
    @NgModule({
        imports: [RouterModule.forChild(routes),
            NgChartsModule
        ],
        exports: [RouterModule]
    })
    export class PagesRoutingModule {}
    