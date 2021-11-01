class DateHelper {
    formatFull() {
        let strFormat = "DD/MM/YYYY HH:mm:ss";
        return strFormat;
    }

    formatFullDay() {
        let strFormat = "DD/MM/YYYY";
        return strFormat;
    }

    formatFullDay2() {
        let strFormat = "YYYY-MM-DD";
        return strFormat;
    }

    formatMonth() {
        let strFormat = "MM/YYYY";
        return strFormat;
    }

    formatYear() {
        let strFormat = "YYYY";
        return strFormat;
    }

    formatHour() {
        let strFormat = "HH:mm";
        return strFormat;
    }

    getYear(startYear) {
        let currentYear = new Date().getFullYear();
        let years = [];
        startYear = startYear || 1900;
        // let i = 1;
        while (startYear <= currentYear) {
            years.push({
                value: startYear.toString(),
                label: startYear.toString(),
            });
            // i++;
            startYear++;
        }
        return years;
    }
}

export default new DateHelper();
