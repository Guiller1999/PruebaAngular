import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ILogin } from '../../models/login.interface';
import { IResponse } from '../../models/response.interface';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private _apiService:ApiService, private router: Router) { }
  
  ngOnInit(): void {
  }

  onLogin(form: ILogin): void {
    
    this._apiService.onLogin(form).subscribe(data => {
          if(data.codigoRetorno === '0001') {
            localStorage.setItem('token', data.toString());
            this.router.navigate(['home']);
          }
         
    });
  }

}
