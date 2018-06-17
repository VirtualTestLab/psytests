import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MethodicsComponent} from './workspace/methodics/methodics.component';
import {UserComponent} from './workspace/user.component';
import {UsermainpageComponent} from './workspace/usermainpage/usermainpage.component';
import {UserMethodicsService} from './services/usermethodics.service';
import {StartMethodicsComponent} from './workspace/startmethodics/startmethodics.component';
import {UserGuard} from './guards/user.guard';
import {ContactsComponent} from './workspace/contacts/contacts.component';
import {DocumentationComponent} from './workspace/documentation/documentation.component';
import {UserprofileComponent} from './workspace/userprofile/userprofile.component';
import {UserprofileService} from '../../services/userprofile.service';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: UserComponent, children: [
     {path: 'mainpage', component : UsermainpageComponent},
     {path: 'methodics', component : MethodicsComponent},
     {path: 'methodics/startMethodics/:id', component: StartMethodicsComponent},
     {path: 'contacts', component: ContactsComponent},
     {path: 'documents', component: DocumentationComponent},
     {path: 'profile', component: UserprofileComponent}
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
  declarations: [UserprofileComponent, UserComponent, UsermainpageComponent, MethodicsComponent, StartMethodicsComponent, ContactsComponent, DocumentationComponent],
  providers: [UserMethodicsService, UserGuard, UserprofileService]
})
export class UserRoutingModule { }
