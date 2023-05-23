import { Component } from '@angular/core';
import { Board } from '../../models/models';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-new-board-create',
  templateUrl: './new-board-create.component.html',
  styleUrls: ['./new-board-create.component.css']
})
export class NewBoardCreateComponent {

  constructor(
    private toastr: ToastrService,
    private httpService: HttpService
  ) { }

  board: Board = new Board("", "", "", []);

  hideBoardCreation = true;

  cancel() {
    this.hideBoardCreation = false;
  }

   submit(form: NgForm) {
    this.httpService.postBoard(form)
      .subscribe({
        next: (data: any) => {
          this.toastr.success("Board is created");
          this.httpService.setData({ boardCreated: true });
        },
        error: (error: any) => {
          if (error.status === 403) {
            this.toastr.error("Invalid token");
          }
          if (error.status === 400) {
            this.toastr.error("Bad Request");
          }
        },
      });
  }
}
