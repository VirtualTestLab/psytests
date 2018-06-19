import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './workspace/admin.component';
import {FormsModule} from '@angular/forms';
import {AdminGuard} from './guards/admin.guard';
import {UsermonitoringComponent} from './workspace/usermonitoring/usermonitoring.component';
import {MethodicscontrolComponent} from './workspace/methodicscontrol/methodicscontrol.component';
import {FileService} from '../../services/info/file.service';
import {ContactService} from '../../services/info/contact.service';
import {ProfileService} from '../../services/profile.service';
import {UserresultComponent} from './workspace/userresult/userresult.component';
import {AdminEditPageComponent} from './workspace/admineditpage/admineditpage.component';
import {MethodicsbuilderComponent} from './workspace/methodicsbuilder/methodicsbuilder.component';
import {AdminmethodicsService} from './services/adminmethodics.service';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'editpage', component : AdminEditPageComponent, canActivate: [AdminGuard]},
    {path: 'usermonitoring', component: UsermonitoringComponent},
    {path: 'methodics', component: MethodicscontrolComponent},
    {path: 'methodics/builder', component: MethodicsbuilderComponent},
    {path: 'result', component: UserresultComponent}
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [AdminComponent, AdminEditPageComponent, UsermonitoringComponent, MethodicscontrolComponent, MethodicsbuilderComponent, UserresultComponent],
  providers: [AdminGuard, AdminmethodicsService, FileService, ContactService, ProfileService]
})
export class AdminRoutingModule { }
