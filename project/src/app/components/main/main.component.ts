import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Board, User, BoardList } from '../../models/models';
import { ToastrService } from 'ngx-toastr';;
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [HttpService]
})


export class MainComponent implements OnInit {
  @Input()
  boardList: BoardList[] = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private httpService: HttpService
  ) { }
  boardCreated = false;
  boardDeleted = false;

  board: Board = new Board("", "", "", []);
  users: User[] = [];
  _id: string = "";
  boards: Board[] = [];

  showDeleteConfirm = false;

  getUsers() {
    this.httpService.getUsers()
      .subscribe({ next: (data: User[]) => this.users = data });
  }

  getUserById(_id: string) {
    this.httpService.getUserById(_id).subscribe({
      next: (data: any) => { }
    });
  }

  async goToBoard() {
    await this.router.navigate(['/board'])
  }

  ngOnInit() {
    this.httpService.getAllBoards().subscribe(
      boards => {
        for (let i = 0; i < boards.length; i++) {

          let board = boards[i];
          console.log(board.title);
          console.log(board._id);
          this.boardList.push({ title: board.title, description: 'add your description', _id: board._id });
        };
      },
      error => {
        if (error.status === 403) {
          this.toastr.error("Invalid token");
        }
      }
    );
    this.httpService.getData().subscribe(data => {
      if (this.boardCreated = data.boardCreated) {
        this.boardList.push({ title: this.board.title, description: 'add your description', _id: this.board._id });
      };
      if (this.boardDeleted = data.boardDeleted) {
        console.log("deleted");
      }
    })
  }

  showBoard(_id: string) {
    console.log(_id);
    this.router.navigate(['/board', _id]);
  }

  deleteBoard(_id: string) {
    console.log("DELETED");
  }

}
