import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutingModule} from './components/admin/admin-routing.module';
import {UserRoutingModule} from './components/user/user-routing.module';
import {AuthComponent} from './components/auth/auth.component';
import {UserHolderService} from './services/userholder.service';
import {ForbiddenComponent} from './forbidden/forbidden.component';


const appRoutes: Routes = [
  {
    path: '', component: AuthComponent, pathMatch: 'full'
  },
  {
    path: 'error/forbidden', component: ForbiddenComponent
  },
  {
    path: 'admin/workspace',
    loadChildren: 'app/components/admin/admin-routing.module#AdminRoutingModule'
  },
  {
    path: 'user/workspace',
    loadChildren: 'app/components/user/user-routing.module#UserRoutingModule'
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
