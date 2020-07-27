export function token_getter() {
    return JSON.parse(localStorage.getItem('token'));
}
