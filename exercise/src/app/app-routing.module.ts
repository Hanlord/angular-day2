import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [{
  path:"", component: MainComponent
},{
  path:"contact", component: ContactUsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
