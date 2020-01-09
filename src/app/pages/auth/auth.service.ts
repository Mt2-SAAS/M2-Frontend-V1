import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Interfaces
import { User, AccountSend } from './auth.interfaces';

// Enviroment
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService {

    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
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
        const body = JSON.stringify(payload);
        return this.post(url, body).pipe(
            map( res => {
                // Save the Token
                console.log(res);
            })
        );
    }

    register(payload: AccountSend) {
        const url = `${this.baseUrl}/api/signup/`;
        const body = JSON.stringify(payload);
        return this.post(url, body);
    }

}
