import Constants from './Constants';

class ModelManager {
    static token = '';
    static userName = '';
    static userName2 = '';

    constructor() {
        this.token = localStorage.getItem(Constants.StorageKey.KEY_TOKEN);
        this.userName = localStorage.getItem(Constants.StorageKey.KEY_USER_NAME);
        this.userName2 = localStorage.getItem(Constants.StorageKey.KEY_USER_NAME_2);
    }

    setToken = async (token) => {
        try {
            this.token = token;
            await localStorage.setItem(Constants.StorageKey.KEY_TOKEN, token);
        } catch (error) {
            console.log(error);
        }
    };

    setUserName = async (userName) => {
        try {
            this.userName = userName;
            await localStorage.setItem(Constants.StorageKey.KEY_USER_NAME, userName);
        } catch (error) {
            console.log(error);
        }
    };

    setUserName2 = async (userName2) => {
        try {
            this.userName2 = userName2;
            await localStorage.setItem(Constants.StorageKey.KEY_USER_NAME_2, userName2);
        } catch (error) {
            console.log(error);
        }
    };

    checkAuth() {
        let token = (localStorage.getItem(Constants.StorageKey.KEY_TOKEN) || 'null');
        return !token || token !== 'null';
    }

    clearLocalStorage = () => {
        localStorage.removeItem(Constants.StorageKey.KEY_TOKEN);
        localStorage.removeItem(Constants.StorageKey.KEY_USER_NAME);
        localStorage.removeItem(Constants.StorageKey.KEY_USER_NAME_2);
        this.setToken(null);
    }
}

export default new ModelManager();
