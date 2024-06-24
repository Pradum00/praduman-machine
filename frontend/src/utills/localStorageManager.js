export const KEY_ACCESS_TOKEN = 'access_token';

export function getItem(key){
    return localStorage.getItem(key);
}

export function setItem(value){
    localStorage.setItem(KEY_ACCESS_TOKEN,value);
}

// export function setName(value){
//     localStorage.setItem("firstname",value);
// }

export function removeItem(key){
    localStorage.removeItem(key);
    // localStorage.removeItem("firstname");
}