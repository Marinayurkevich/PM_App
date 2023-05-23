import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { NgForm } from '@angular/forms';
import { Board, User, Column } from '../app/models/models';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class HttpService {
  constructor(private http: HttpClient,
    private toastr: ToastrService
  ) { }

  private data = new Subject<any>();

  URL: string = 'https://final-task-backend-production-c527.up.railway.app/';
  substring: string = "";
  substring2: string = "";
  errorMessage: String = "";


  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    })
  };

  postData(form: NgForm) {
    this.substring = "auth/signup";
    const body = { name: form.value.name, login: form.value.login, password: form.value.password };
    return this.http.post(this.URL + this.substring, body);
  }

  postLogin(form: NgForm) {
    this.substring = "auth/signin";
    const body = { login: form.value.login, password: form.value.password };
    return this.http.post(this.URL + this.substring, body);
  }

  postBoard(form: NgForm) {
    this.substring = "boards";
    const body = { title: form.value.title, owner: form.value.owner, users: form.value.users };
    return this.http.post(this.URL + this.substring, body, this.httpOptions);
  }

  getUsers(): Observable<User[]> {
    this.substring = "users";
    return this.http.get(this.URL + this.substring, this.httpOptions)
      .pipe(map((data: any) => {
        let usersList = data["userList"];
        return usersList.map(function (user: any): User {
          return new User(user._id, user.name, user.login);
        });
      }),
        catchError(error => {
          if (error.status === 403) {
            this.toastr.error("Invalid token");
          };
          this.errorMessage = error.message;
          return [];
        })
      );
  }

  getBoardById(_id: string) {
    return this.http.get(`https://final-task-backend-production-c527.up.railway.app/boards/` + _id, this.httpOptions);
  }

  deleteUser(_id: string) {
    return this.http.delete(`https://final-task-backend-production-c527.up.railway.app/users/` + _id, this.httpOptions);
  }

  deleteBoard(_id: string) {
    return this.http.delete(`https://final-task-backend-production-c527.up.railway.app/boards/${_id}`, this.httpOptions);
  }

  createColumn(column: Column) {
    const body = { title: column.title, order: column.order };
    const id = column._id;
    this.substring = `boards/${id}/columns`;
    return this.http.post(this.URL + this.substring, body, this.httpOptions);
  }

  getUserById(_id: string) {
    return this.http.get(`https://final-task-backend-production-c527.up.railway.app/users/` + _id, this.httpOptions);
  }

  getAllBoards(): Observable<Board[]> {
    this.substring = "boards";
    return this.http.get<any>(this.URL + this.substring, this.httpOptions);
  }


  getAllColumns(_id: string): Observable<Column[]> {
    this.substring = "boards/";
    this.substring2 = "/columns";
    return this.http.get<any>(this.URL + this.substring + _id + this.substring2, this.httpOptions);
  }

  setData(data: any) {
    this.data.next(data);
  }

  getData() {
    return this.data.asObservable();
  }

}
