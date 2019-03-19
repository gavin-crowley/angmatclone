import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { CDKComponent } from './cdk/cdk.component';
import { GuidesComponent } from './guides/guides.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'cdk', component: CDKComponent},
  { path: 'guides', component: GuidesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
