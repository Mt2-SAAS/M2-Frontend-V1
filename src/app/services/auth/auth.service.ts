import { Injectable } from '@angular/core';

// Helper de autenticacion
import { JwtHelperService } from '@auth0/angular-jwt';

// Local Storage Service
import { LocalStorageService } from '../localstorage.service';

const decode: JwtHelperService = new JwtHelperService();

@Injectable()
export class AuthService {
    constructor(
        private stg: LocalStorageService
    ) {}

    isAuthenticated(): boolean {
        const token = this.stg.get_token();
        const isTokenExpired = decode.isTokenExpired(token);
        return !isTokenExpired;
    }

    logOut() {
        this.stg.delete_token();
        this.stg.delete_item('user');
    }
}
