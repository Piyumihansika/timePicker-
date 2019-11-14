import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{TestComponent} from '../app/test/test.component';
import{AppComponent} from '../app/app.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component:AppComponent},
    
  {path:'test',component:TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
