export function strToDate(string: string): Date | null {
    let dateValue = string ? new Date(string) : null;
    return dateValue
}

export const formatter = new Intl.DateTimeFormat('es-SV');

export function formatDate(date: Date | string | undefined) {
    const d = new Date(date !== undefined ? date : ''),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    // if (month.length < 2)
    //     month = '0' + month;
    // if (day.length < 2)
    //     day = '0' + day;

    return [year, month, day].join('-');
}