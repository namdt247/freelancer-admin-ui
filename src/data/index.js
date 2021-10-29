export const yearOptions = (startYear) => {
    let currentYear = new Date().getFullYear();
    let years = [];
    startYear = startYear || 1900;
    let i = 1;
    while (startYear <= currentYear) {
        years.push({
            value: startYear.toString(),
            label: startYear.toString(),
        });
        i++;
        startYear++;
    }
    return years;
}
