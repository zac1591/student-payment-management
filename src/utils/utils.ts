export function strToDate(string: string): Date | null {
    let dateValue = string ? new Date(string) : null;
    return dateValue
}

export const formatter = new Intl.DateTimeFormat('es-SV');

