
export const login = (username, password) => {
    localStorage.setItem('token', 'user');
}

export const logout = () => {
    localStorage.removeItem('token');
}

export const checkAuth = () => {
    //localStorage.removeItem('token');
    return localStorage.getItem('token') ? true : false;
}