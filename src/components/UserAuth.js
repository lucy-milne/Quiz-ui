
export const login = (username, password) => {
    sessionStorage.setItem('token', 'user');
}

export const logout = () => {
    sessionStorage.removeItem('token');
}

export const checkAuth = () => {
    return sessionStorage.getItem('token') ? true : false;
}