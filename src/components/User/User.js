
export const login = (username, password) => {
    localStorage.setItem('token', 'user');
}


export const logout = () => {
    localStorage.removeItem('token');
}

export const checkAuth = () => {
    //localStorage.removeItem('token');
    const auth = localStorage.getItem('token') ? true : false;
    return auth
}