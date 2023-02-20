const tokenName = "balloons-shop-verify-token";

const updateToken = (token: string) => {
    return localStorage.setItem(tokenName, token);
};

const getToken = () => {
    return localStorage.getItem(tokenName);
};

const removeToken = () => {
    localStorage.removeItem(tokenName);
};

export {
    updateToken,
    getToken,
    removeToken
}