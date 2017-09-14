import { Component, OnInit } from '@angular/core';
import {DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    name:string;
    age:number;
    email:string;
    address:Address;
    hobbies:string[];
    posts:Post[];

  constructor(private dataService:DataService) {
      console.log('Constructor ran...')
  }

  ngOnInit() {
    console.log('ngOnInit ran...')
    this.name = 'Jhonon Doe';
    this.age = 33;
    this.email = 'alguno@gmail.com'
    this.address = {
      street : 'Lamadrid',
      city : 'Quilmes',
      state : 'Buenos Aires'
    }
    this.hobbies = ['Play ps4', 'Watch movies', 'Listen to music'];

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
    });
  }

  onClick() {
    this.name = 'Leonardo Reanudo';
    this.hobbies.push('Sleep');

  }
  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
}


interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number

}
