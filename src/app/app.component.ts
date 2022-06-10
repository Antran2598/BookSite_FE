import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
   ngOnInit(){}
}
