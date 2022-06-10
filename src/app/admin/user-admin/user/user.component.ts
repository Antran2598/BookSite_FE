import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public users: User[] | any;
  public editUser: User | any;
  public deleteUser: User | any;
  constructor(private userService: UserService){}
  ngOnInit() {
      this.getUsers();
  }
  public getUsers(): void {
     this.userService.getUsers().subscribe(
       (response: User[]) =>{
         this.users = response;
       },
       (error: HttpErrorResponse)=>{
         alert(error.message);
       }
     );
  }

  public onAddUser(addForm: NgForm){
    document.getElementById('add-user-form')?.click();
    this.userService.addUsers(addForm.value).subscribe(
       (response: User) => {
         console.log(addForm);
         console.log(response);
         this.getUsers();
         addForm.reset();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         addForm.reset();
       },
    )

  }

  public onUpdateUser(user: User){
   this.userService.updateUsers(user).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
   )

 }

 public onDeleteUser(userId: number){
   this.userService.deleteUsers(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
   )

 }

 public searchUsers(key: string):void{
   console.log(key);
   const results: User[] = [];
   for(const user of this.users){
     if(user.username.toLowerCase().indexOf(key.toLowerCase()) !== -1){
         results.push(user);
     }
   }
   this.users = results;
   if(results.length === 0 || !key){
     this.getUsers();
   }

 }



  public onOpenModal(user: User | any, mode: string):void {
     const container = document.getElementById('main-container');
     const button = document.createElement('button');
     button.type='button';
     button.style.display= 'none';
     button.setAttribute('data-toggle', 'modal');
     if(mode ==='add'){
       button.setAttribute('data-target', '#addUserModal');
     }
     if(mode ==='edit'){
       this.editUser = user;
       button.setAttribute('data-target', '#editUserModal');
     }
     if(mode ==='delete'){
       this.deleteUser = user;
       button.setAttribute('data-target', '#deleteUserModal');
     }
     container?.appendChild(button);
     button.click();
  }

}
