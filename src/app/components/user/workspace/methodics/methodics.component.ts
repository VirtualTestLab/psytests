import { Component, OnInit } from '@angular/core';
import {DescriptionMethodics} from '../../../../domain/methodics/descriptionMethodics';
import {UserMethodicsService} from '../../services/usermethodics.service';
import {Router} from '@angular/router';
import {LoadingPictureController} from '../../../../services/loadingPictureController';
import {StateSaverService} from '../../../../services/statesaver.service';

@Component({
  selector: 'app-methodics',
  templateUrl: './methodics.component.html',
  styleUrls: ['./methodics.component.css']
})
export class MethodicsComponent implements OnInit {

  errorMessage: string;
  openMethodics: DescriptionMethodics[];
  constructor(private methodicsService: UserMethodicsService,
              private router: Router) { }

  ngOnInit() {
    const url = StateSaverService.getUrlStateByKey('methodicsTab');
      if (url === null || url === undefined) {
      this.getMethodics();
    } else {
      this.router.navigateByUrl(url);
    }
  }

  getMethodics() {
    LoadingPictureController.startLoadingPicture();
    this.methodicsService.getAvailableMethodics().subscribe(x => {
      this.openMethodics = x;
      LoadingPictureController.stopLoadingPicture();
      });
  }

  startMethodics(id) {
     this.router.navigateByUrl('startMethodics/' + id);
  }
}
