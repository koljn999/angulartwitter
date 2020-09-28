import {User} from './User';

export class Post {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get author(): User {
    return this._author;
  }

  set author(value: User) {
    this._author = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
  private _id: number;
  private _author: User;
  private _content: string;
  private _date: Date;

  constructor( id?: number, author?: User, content?: string, date?: Date) {
    this._author=author;
    this._content=content;
    this._id=id;
    this._date=date;

  }
}
