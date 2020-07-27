import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Env
import { environment } from '../../../environments/environment';


@Injectable()
export class ApplicationService {

    apiUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) {}

    get_guilds(page: number = 1) {
        const url = `${this.apiUrl}/api/guild_rank/?page=${page}`;
        return this.http.get(url);
    }

    get_players(page: number = 1) {
        const url = `${this.apiUrl}/api/player_rank/?page=${page}`;
        return this.http.get(url);
    }

    get_stats(){
        const url = `${this.apiUrl}/api/server_status/`;
        return this.http.get(url)
    }

}
