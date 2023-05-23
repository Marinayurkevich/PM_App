import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from '../../models/models';


@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})

export class DeleteConfirmComponent {


  constructor(
    private route: ActivatedRoute) {
    this._id = this.route.snapshot.paramMap.get('_id');
  }

  _id?: string | null;


  board: Board = new Board("", "", "", []);
  hideDeleteConfirm = true;

  doNotDelete() {
    this.hideDeleteConfirm = false;
  }
  deleteBoard() {
    console.log("delete");
  }

}
