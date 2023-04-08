import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {


  //Untuk menampung data
  form = {
    username: localStorage.getItem("username"),//Localstorage.getitem untuk mengambil data dari variabel username
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
