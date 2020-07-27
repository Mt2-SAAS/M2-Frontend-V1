import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// Enviroment
import { environment } from '../../../environments/environment';

// Global Services
// import { LocalStorageService } from 'src/app/services';
import { UserLogin, CHPass } from './dashboard.interfaces';


@Injectable()
export class DashboardService {

    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient,
        // private localstg: LocalStorageService
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

    get_user() {
        const url = `${this.baseUrl}/api/current_user/`;
        return this.http.get<UserLogin>(url);
    }

    get_current_players() {
        const url = `${this.baseUrl}/api/current_players/`;
        return this.http.get(url);
    }

    change_password(payload: CHPass) {
        const url = `${this.baseUrl}/api/change_pass/`;
        return this.post(url, payload);
    }


}
