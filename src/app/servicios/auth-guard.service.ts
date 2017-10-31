import { Injectable } from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate
        } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    //console.log(next)
    //return this.auth.isAuthenticated()

    if(this.auth.isAuthenticated()){
      console.log("paso el guadian");
      return true;
    } else {
      console.log("bloqueado por el guardian");
      return false;
    }
  }

}
