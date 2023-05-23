import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../http.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardPreview, ColumnPreview } from '../../models/models';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  _id: string | null;

  constructor(private route: ActivatedRoute,
    private toastr: ToastrService,
    private httpService: HttpService) {
    this._id = this.route.snapshot.paramMap.get('_id');
  }

  hideBoardCreation = false;
  newColumnCreation = false;
  columnCreated = false;
  taskCreated = false;
  newTask = false;

  cancel() {
    this.hideBoardCreation = false;
  }

  board: BoardPreview = new BoardPreview("", [
    new ColumnPreview("", ["", "", ""]),
  ]);


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit() {
    this.httpService.getAllColumns(this._id!).subscribe({
    })
    this.httpService.getBoardById(this._id!).subscribe({
      next: (data: any) => {
        this.httpService.setData({ columnCreated: true });
        this.httpService.setData({ taskCreated: true });
      },
      error: (error: any) => {
        if (error.status === 404) {
          this.toastr.error(`Error ${error.status}. Board was not founded!`);
        };
        if (error.status === 403) {
          this.toastr.error(`Error ${error.status}. Invalid token. Register or Sign in, please!`);
        }
      },
    });
    this.httpService.getAllColumns(this._id!).subscribe({
      next: (data: any) => {
        this.toastr.success("All columns");
        if (data) {
          for (let i = 0; i < data.length; i++) {
            this.board.columns.push({
              name: data.title,
              tasks: [],
            });
            this.board.columns[i].name = data[i].title;
            console.log(this.board);
          }
        }
      },
    })
    this.httpService.getData().subscribe(data => {
      if (this.columnCreated = data.columnCreated) {
        this.board.columns.push({
          name: data.title,
          tasks: []
        });
      };
    })
  }
}

