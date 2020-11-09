import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  LoginNavigation(designation: string): void
  {
    if(designation == "Admin")
      this.router.navigate(['adminHome']);
    else
      this.router.navigate(['home']);
  }

}
