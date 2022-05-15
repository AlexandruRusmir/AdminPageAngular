import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { RestService } from 'src/app/rest.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  constructor(private rs: RestService) { 
  }


  Users: User[] = [
  ];

  ngOnInit(): void {
    this.rs.getUsers().subscribe(
      (Response) => {
        console.log(Response);
        this.Users = Response;
      }, (error) => {
        console.log("Eroare!");
      }
    );
  }

  deleteUser(partitionKey: String, rowKey: String): void {
    this.rs.deleteUserf(partitionKey, rowKey).subscribe(
      (Response) => {
        console.log(Response);
      }, (error) => {
        console.log("Eroare!");
      }
    );
    
    window.setTimeout(function(){location.reload()},3000)
  }
}