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
  currentClasses = {};
  currentStyles = {};

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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
          balance: 100,
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
          image: 'http://lorempixel.com/600/600/people/2',
          isActive: false,
          balance: 100,
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
          image: 'http://lorempixel.com/600/600/people/1',
          isActive: true,
          balance: 50,
          registered: new Date('11/02/2016 10:30:00')
      }
  
      ];

      this.loaded = true;
  


   


    // this.addUser({
    //   firstName: 'Adam',
    //   lastName: 'Koehler',


    // });

    this.setCurrentClasses();
    this.setCurrentStyles();

  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
