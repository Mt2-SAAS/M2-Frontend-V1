import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {}

    set_token(token: string) {
        localStorage.setItem('token', JSON.stringify(token));
    }

    get_token() {
        if (localStorage.getItem('token') != null) {
            return JSON.parse(localStorage.getItem('token'));
        }
    }

    delete_token() {
        localStorage.removeItem('token');
    }

    set_item(itemName: string, item: any) {
        localStorage.setItem(itemName, JSON.stringify(item));
    }

    get_item(itemName: string) {
        return JSON.parse(localStorage.getItem(itemName));
    }

    delete_item(itemName: string) {
        localStorage.removeItem(itemName);
    }

}
