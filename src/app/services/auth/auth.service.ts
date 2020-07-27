import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Helper de autenticacion
import { JwtHelperService } from '@auth0/angular-jwt';

// Local Storage Service
import { LocalStorageService } from '../localstorage.service';


// const decode: JwtHelperService = new JwtHelperService();

@Injectable()
export class AuthService {
    constructor(
        private stg: LocalStorageService,
        private decode: JwtHelperService,
        private router: Router
    ) {}

    isAuthenticated(): boolean {
        const token = this.stg.get_token();
        const isTokenExpired = this.decode.isTokenExpired(token);
        return !isTokenExpired;
    }

    logOut(): void {
        this.stg.delete_token();
        this.stg.delete_item('user');
        this.router.navigate(['/inicio']);
    }
}
