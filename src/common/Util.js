import {BASE_URL} from "../requests/ApiConfig";

class Util {
    convertMoney(number, prefix = true) {
        let strNumber = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        if(prefix) {
            strNumber = strNumber + ' VNĐ';
        }
        return strNumber;
    }

    isNumber(number) {
        return !number.toString().match(/^[0-9\b]+$/);
    }

    isEmail(email) {
        return email.toString().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    }


    getThumb(_alias, crop) {
        if (!_alias) {
            return null;
        }
        let alias = _alias;
        if (!alias.startsWith('http')) {
            if (alias.startsWith('/')) {
                alias = alias.substring(1);
            }
            alias = BASE_URL + '/api/Upload?fileName=' + alias;
        }
        let realUrl = alias;
        if (crop && crop !== '') {
            const pos = alias.lastIndexOf('/');
            let baseUrl = alias.substring(0, pos);
            if (baseUrl.slice(-1) === '/') {
                baseUrl += crop;
            } else {
                baseUrl = `${baseUrl}/${crop}`;
            }
            realUrl = `${baseUrl}${alias.substring(pos)}`;
        }
        return realUrl;
    }

    getValueByName(text) {
        return text
            .split(/\s/)
            .reduce((response, word) => (response += word.slice(0, 1)), "");
    };
}

export default new Util();
