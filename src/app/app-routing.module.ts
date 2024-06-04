import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const routes: Routes = [
  {path:"", component:PropertyListComponent},
  {path:"add-property", component:AddPropertyComponent},
  {path:"rent-property", component:PropertyListComponent},
  {path:"property-details/:Id", component:PropertyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
