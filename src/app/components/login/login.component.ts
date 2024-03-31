import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup
  sub$!: Subscription
  showError: boolean = false

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginService.logout()
    this.initializeForm()
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  login(): void {
    this.showError = false
    this.sub$ = this.loginService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard')
      },
      error: () => {
        this.loginForm.reset()
        this.showError = true
      }
    })
  }

  ngOnDestroy(): void {
    if (this.sub$) this.sub$.unsubscribe()
  }
}
