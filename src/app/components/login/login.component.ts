import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers:[LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup
  sub$!: Subscription

  constructor(private fb: FormBuilder, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  login(): void {
    this.sub$ = this.loginService.login(this.loginForm.value).subscribe({
      next: (res) => alert(res),
      error: (err) => alert(err)
    })
  }

  ngOnDestroy(): void {
    if (this.sub$) this.sub$.unsubscribe()
  }
}
