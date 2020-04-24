import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public name: any = '';
  public description: any = '';
  public signupname: any = '';
  public signuppassword: any = '';
  public username = '';
  public password = '';
  public email = '';
  public logged = false;
  public isStaff = false;
  loggedUsername: any;
  provider: any;
  constructor() { }

  ngOnInit(): void {
  }
  auth() {
    if (this.username !== '' && this.password !== '') {
      this.provider.auth(this.username, this.password).then(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('email',res.email);
        this.isStaff = res.is_staff;
        this.logged = true;
        this.loggedUsername = res.username;
        this.username = '';
        this.password = '';
        // this.provider.getCategories().then(r => {
        //   this.categories = r;
        // });
      });
    }
  }

  logout() {
    this.provider.logout().then(res => {
      localStorage.removeItem('token');
      this.logged = false;
    });
  }

  signup() {
    if (this.signupname!== '' && this.email && this.signuppassword!== '') {
      this.provider.signup(this.signupname, this.email, this.signuppassword).then(res =>
        this.provider.auth(this.signupname, this.signuppassword).then(r => {
        localStorage.setItem('token', r.token);
        this.isStaff = r.is_staff;
        this.logged = true;
        this.loggedUsername = r.username;
        this.signupname = '';
        this.signuppassword = '';
        }));
    }
  }
}
