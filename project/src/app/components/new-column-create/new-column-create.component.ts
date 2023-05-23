import { Component } from '@angular/core';
import { Column } from '../../models/models';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-column-create',
  templateUrl: './new-column-create.component.html',
  styleUrls: ['./new-column-create.component.css']
})
export class NewColumnCreateComponent {


  _id: string | null;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private httpService: HttpService
  ) {
    this._id = this.route.snapshot.paramMap.get('_id');
  }

  column: Column = new Column("", "", 0, "")

  hideColumnCreation = true;


  submit(form: NgForm) {
    this.column.title = form.value.title;
    this.column._id = this._id!;


    this.httpService.createColumn(this.column)
      .subscribe(success => {
        this.toastr.success("Column is created");
        this.httpService.setData({ columnCreated: true });
      });
  }
}
