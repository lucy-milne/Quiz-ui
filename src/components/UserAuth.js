
export const login = (username, password) => {
    localStorage.setItem('token', 'user');
}

export const logout = () => {
    localStorage.removeItem('token');
}

export const checkAuth = () => {
    return localStorage.getItem('token') ? true : false;
}