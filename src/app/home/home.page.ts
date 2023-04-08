import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Menjalankan router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // Untuk Menampung data
  form = {
    username: '',
    password: ''
  }

  // Menambahkan Routing
  constructor(
    private router: Router
  ) { }

  //Membuat function
  doLogin() {

    localStorage.setItem("username", this.form.username);
    localStorage.setItem("password", this.form.password);

    this.router.navigateByUrl("welcome") // Perintah untuk pindah ke halaman welcome

  }

}
