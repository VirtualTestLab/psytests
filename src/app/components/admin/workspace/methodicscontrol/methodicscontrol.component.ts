import { Component, OnInit } from '@angular/core';
import {DescriptionMethodics} from '../../../../domain/methodics/descriptionMethodics';
import {LoadingPictureController} from '../../../../services/loadingPictureController';
import {AdminmethodicsService} from '../../services/adminmethodics.service';

@Component({
  selector: 'app-methodicscontrol',
  templateUrl: './methodicscontrol.component.html',
  styleUrls: ['./methodicscontrol.component.css']
})
export class MethodicscontrolComponent implements OnInit {

  allMethodics: DescriptionMethodics[];
  constructor(private methodicsService: AdminmethodicsService) { }

  ngOnInit() {
    LoadingPictureController.stopLoadingPicture();
    this.getAllMethodics();
  }
  getAllMethodics() {
    LoadingPictureController.startLoadingPicture();
    this.methodicsService.getAllMethodics().subscribe(x => {
      this.allMethodics = x;
      LoadingPictureController.stopLoadingPicture();
    });
  }

  deleteMethodics(methodics: DescriptionMethodics) {
    this.methodicsService.deleteMethodicsById(methodics.id.toString()).subscribe(x => this.getAllMethodics());
  }
}
