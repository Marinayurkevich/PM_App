import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../http.service';



@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private httpService: HttpService) { }

  hideDeleteConfirm = true;

  doNotDelete(){
    this.hideDeleteConfirm = false;
  }

  deleteUser(){
    this.httpService.deleteUser(`${localStorage.getItem('_id')}`).subscribe({
      next: (data: any) => {
        this.toastr.success("This user is deleted");
        this.router.navigate([""]);
      }
    });
  }
}
