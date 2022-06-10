import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentUser: any;
  constructor(public tokenStorageService: TokenStorageService) {
    this.currentUser = this.tokenStorageService.getUser();
   }

  ngOnInit(): void {
    
  }

}
