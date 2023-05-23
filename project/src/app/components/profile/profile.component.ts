import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/models';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private httpService: HttpService) { }

  hideProfile = true;
  showDeleteConfirm = false;

  async goToWelcomePage() {
    await this.router.navigate([""])
  }
  user: User = new User("", "", "");
  registeredUser: User = new User("", "", "");



  ngOnInit() {
    this.registeredUser._id = `${localStorage.getItem('_id')}`;
    this.registeredUser.name = `${localStorage.getItem('name')}`;
    this.registeredUser.login = `${localStorage.getItem('login')}`;
  }


  getUserById() {
    this.httpService.getUserById(this.user._id).subscribe({
      next: (data: any) => {
        console.log(this.user._id);
        this.user._id = data._id;
        this.user.name = data.name;
        this.user.login = data.login;
      }
    });
  }

}
