import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"register",component:RegisterComponent},
  {path:"about",component:AboutComponent},
  {path:"main",component:MainComponent},
  {path:"delete",component:DeleteComponent},
  {path:"viewdata",component:ViewdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
