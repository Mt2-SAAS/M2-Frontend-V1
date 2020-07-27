import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Interfaces
import { User, AccountSend } from './auth.interfaces';

// Enviroment
import { environment } from '../../../environments/environment';

// Global Services
import { LocalStorageService } from 'src/app/services';


@Injectable()
export class AuthService {

    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient,
        private localstg: LocalStorageService
    ) {}

    private get_headers() {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
          })
        };

        return httpOptions;
    }

    private post(url: string, body: any) {
        const data = JSON.stringify(body);
        return this.http.post(url, data, this.get_headers());
    }

    auth(payload: User) {
        const url = `${this.baseUrl}/api/token/`;
        return this.post(url, payload).pipe(
            map( (res: any) => {
                // Save the Token and only return token
                this.localstg.set_token(res.refresh);
                return res.refresh;
            })
        );
    }

    register(payload: AccountSend) {
        const url = `${this.baseUrl}/api/signup/`;
        const body = JSON.stringify(payload);
        return this.post(url, body);
    }

    verify_user(username: string) {
        const url = `${this.baseUrl}/api/info/${username}`;
        return this.http.get(url);
    }

}
