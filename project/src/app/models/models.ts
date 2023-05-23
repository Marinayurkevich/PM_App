export class BoardPreview {
  constructor(public name: string,
    public columns: ColumnPreview[]) { }
}

export class ColumnPreview {
  constructor(public name: string,
    public tasks: string[]) { }
}

export class newUser {
  constructor(public name: string,
    public login: string,
    public password: string) { }
}

export class User {
  constructor(public _id: string,
    public name: string,
    public login: string) { }
}

export class createBoard {
  constructor(public title: string,
    public owner: string,
    public users: string[]) { }
}

export class Board {
  constructor(public _id: string,
    public title: string,
    public owner: string,
    public users: string[]) { }
}

export class BoardList {
  constructor(public title: string,
    public description: string,
    public _id: string,
    ) { }
}

export class Column {
  constructor(public _id: string,
    public title: string,
    public order: number,
    public boardId: string
    ) { }
}

export class Task {
  constructor(public _id: string,
    public title: string,
    public order: number,
    public boardId: string,
    public columnId: string,
    public description: string,
    public userId: number,
    public users: string[]) { }
}

export class File {
  constructor(public _id: string,
    public name: string,
    public taskId: string,
    public boardId: string,
    public path: string) { }
}

export class Point {
  constructor(public _id: string,
    public title: string,
    public taskId: number,
    public boardId: string,
    public done: boolean) { }
}


export class ErrorResponse {
  constructor(public statusCode: number,
    public message: string) { }
}
