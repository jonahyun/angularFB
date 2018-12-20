import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;


  constructor() { }

  ngOnInit() {

      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 70,
          address: {
              street: '50 main st',
              city: 'Boston',
              state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00')
          
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
          isActive: false,
          registered: new Date('03/11/2017 06:20:00')     
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
          isActive: true,
          registered: new Date('11/02/2016 10:30:00')
      }
  
      ];

      this.loaded = true;



  }

  addUser(user: User) {
    this.users.push(user);
  }

  fireEvent(e) {
    console.log("button clicked");
    console.log(e.type);
  }


}
