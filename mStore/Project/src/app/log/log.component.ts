import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor() { }

  loginModel = {
    username: '',
    password: ''
  }

  registerModel = {
    email: '',
    firstname: '',
    lastname: '',
    username: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log(this.loginModel)
  }

  onRegister(): void {
    console.log(this.registerModel)
  }
}
