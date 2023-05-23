import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { newUser } from '../../models/models';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private httpService: HttpService) { }


  user: newUser = new newUser("", "", "");

  async goToRegistration() {
    await this.router.navigate(['/register'])
  }

  submit(form: NgForm) {
    this.httpService.postLogin(form)
      .subscribe({
        next: (data: any) => {
          this.toastr.success("Successeful login");
          if (data.token) {
            localStorage.setItem('access_token', data.token);
              this.router.navigate(['/main']);
          }
        },
        error: (error: any) => {
          if (error.status === 401 || error.status === 400) {
            this.toastr.error(`Error ${error.status}. Authorization error. Try again, please!`);
          }
        },
      });
  }
}
