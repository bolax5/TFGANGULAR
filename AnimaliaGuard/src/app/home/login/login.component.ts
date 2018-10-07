import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpService) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.loginForm.valid ? console.log('chachi') : console.log('no chachi');
    this.http.post('/login', this.loginForm.value).subscribe(this.ok, this.noOk);
  }
  ok(msg) {
    console.log(msg);
  }
  noOk(err) {
    console.log(err);
  }
}
