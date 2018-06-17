import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoadingPictureController} from '../../../../services/loadingPictureController';

@Component({
  selector: 'app-usermainpage',
  templateUrl: './usermainpage.component.html',
  styleUrls: ['./usermainpage.component.css']
})
export class UsermainpageComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    LoadingPictureController.stopLoadingPicture();
  }

}
