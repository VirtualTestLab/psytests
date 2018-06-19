import {Component, Input, OnInit} from '@angular/core';
import {UserCreds} from '../../../../../domain/users/usercreds';
import {DescriptionMethodics} from '../../../../../domain/methodics/descriptionMethodics';
import {AdminmethodicsService} from '../../../services/adminmethodics.service';

@Component({
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.css']
})
export class SComponent implements OnInit {

  @Input() creds: UserCreds;
  descriptionMethodics: DescriptionMethodics[];
  message = 'идёт загрузка методик...';

  constructor(private adminService: AdminmethodicsService) { }

  ngOnInit() {
    this.adminService.getAllMethodicsPassedByUser(this.creds.id.toString()).subscribe(
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
    this.adminService.deletePassingFact(this.creds.id.toString(), methodics.id.toString()).subscribe(
      x => {
        if (this.descriptionMethodics.length > 0) {
          this.message = null;
        } else {
          this.message = 'пройденных методик не найдено';
          this.descriptionMethodics = null;
        }
      }
    );
  }
}
