import {User} from './User';

export class Post {
  id: number;
  author: User;
  content: string;
  date: any;

  constructor(id: number, author: User, content: string, date: any) {
    this.id = id;
    this.author.lastName = author.lastName;
    this.author.firstName=author.firstName;
    this.author.nikName=author.nikName;
    this.content = content;
    this.date = date;
  }
}
