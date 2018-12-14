import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
            street: '50 main st',
            city: 'Boston',
            state: 'MA'
        }
      },
      {
        firstName: 'Sarah',
        lastName: 'Smith',
        age: 30,
        address: {
            street: '2323 Pricneton',
            city: 'Louisville',
            state: 'KY'
        }
      },
      {
        firstName: 'Cisol',
        lastName: 'Hogan',
        age: 41,
        address: {
            street: '2323 School St',
            city: 'Liberty',
            state: 'OH'
        }
    }

    ];
    this.addUser({
      firstName: 'Adam',
      lastName: 'Koehler',
      age: 41,
      address: {
          street: '2323 School St',
          city: 'Liberty',
          state: 'OH'
      }

    });

  }

  addUser(user: User) {
    this.users.push(user);
  }

}
