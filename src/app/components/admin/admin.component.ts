import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Observable} from "rxjs";
import {UsersInterface} from "../../interfaces/users.interface";
import {AsyncPipe, DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    DatePipe
  ],
  providers: [UsersService],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{
  usersData$!: Observable<UsersInterface[]>
  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void{
    this.usersData$ = this.usersService.getUsers()
  }
}
