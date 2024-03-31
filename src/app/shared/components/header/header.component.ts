import { Component } from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {PersistanceService} from "../../services/persistance.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(protected perService: PersistanceService, protected router: Router) {
  }
}
