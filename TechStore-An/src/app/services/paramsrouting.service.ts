import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckauthService } from './checkauth.service';
@Injectable()
export class ParamsroutingService implements CanActivate {

  constructor(private authservice: CheckauthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authservice.verify()
  }
}
