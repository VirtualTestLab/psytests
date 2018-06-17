import { Component, OnInit } from '@angular/core';
import {LoadingPictureController} from '../../../../services/loadingPictureController';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    LoadingPictureController.stopLoadingPicture();
  }

}
