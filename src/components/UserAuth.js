
export const login = (username) => {
    sessionStorage.setItem('token', 'user');
    sessionStorage.setItem('user', username)

}

export const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

export const checkAuth = () => {
    return sessionStorage.getItem('token') ? true : false;
}

export const getUser = () => {
    return sessionStorage.getItem('user')
}