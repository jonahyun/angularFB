import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

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
          },
          image: 'http://lorempixel.com/600/600/people/3'
          
        },
        {
          firstName: 'Sarah',
          lastName: 'Smith',
          age: 30,
          address: {
              street: '2323 Pricneton',
              city: 'Louisville',
              state: 'KY'
          },
          image: 'http://lorempixel.com/600/600/people/2'
        },
        {
          firstName: 'Cisol',
          lastName: 'Hogan',
          age: 41,
          address: {
              street: '2323 School St',
              city: 'Liberty',
              state: 'OH'
          },
          image: 'http://lorempixel.com/600/600/people/1'
      }
  
      ];

      this.loaded = true;
  


   


    // this.addUser({
    //   firstName: 'Adam',
    //   lastName: 'Koehler',


    // });

  }

  addUser(user: User) {
    this.users.push(user);
  }

}
