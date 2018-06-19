import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../../../services/profile.service';
import {UserCreds} from '../../../../domain/users/usercreds';
import {DescriptionMethodics} from '../../../../domain/methodics/descriptionMethodics';
import {AdminmethodicsService} from '../../services/adminmethodics.service';
import {PassableMethodics} from '../../../../domain/methodics/passableMethodics';

@Component({
  selector: 'app-userresult',
  templateUrl: './userresult.component.html',
  styleUrls: ['./userresult.component.css']
})
export class UserresultComponent implements OnInit {
  users: UserCreds[] = [];
  user: UserCreds;
  passingFact: PassableMethodics;

  descriptionMethodics: DescriptionMethodics[];
  message = 'идёт загрузка методик...';

  constructor(private profileService: ProfileService, private adminService: AdminmethodicsService) { }

  ngOnInit() {
     this.getAll();
  }
  getAll() {
    this.profileService.getAll().subscribe(x => {
        const usersResponse: UserCreds[] = x;
        for (const user of usersResponse) {
          if (user.roleUser === 'ROLE_USER') {
            this.users.push(user);
          }
        }
      }
    );
  }

  select(user) {
    this.passingFact = null;
    this.user = user;
    this.message = 'идёт загрузка методик...';
    this.adminService.getAllMethodicsPassedByUser(this.user.id.toString()).subscribe(
      x => {
        this.descriptionMethodics = x;
        if (this.descriptionMethodics.length > 0) {
          this.message = null;
        } else {
          this.message = 'пройденных методик не найдено';
          this.descriptionMethodics = null;
        }
      }
    );
  }

  reopen(methodics: DescriptionMethodics) {
    this.adminService.deletePassingFact(this.user.id.toString(), methodics.id.toString()).subscribe(
      x => {
        this.select(this.user);
      }
    );
  }

  openDetail(methodics: DescriptionMethodics) {
    this.adminService.getResultPassingFact(this.user.id.toString(), methodics.id.toString()).subscribe(
      x => this.passingFact = x
    );
  }
}
