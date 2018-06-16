import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  array = ['1' , '2' , '3', '4'];
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logoutClick() {
    this.authService.logout();
  }
}
