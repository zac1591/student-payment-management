export const contacts = [
    {
        id: '01',
        firstName: 'Gar',
        lastName: 'Satterley',
        personalId: '04402486-8',
        phoneNumber: '50378965214',
        email: 'gar@aol.com',
        country: 'El Salvador',
        address: '',
        department: 'San Salvador',
        DOB: '5/14/1987',
        gender: 'Masculino',
        scholarship: false,
        assignedMonthlyPayment: '100.00',
        firstPaymentDate: '4/27/2023',
        lastPaymentDate: '3/27/2023',
        groups: 'PEM',
        accessLevel: 'student'

    },
    {
        id: '02',
        firstName: 'John',
        lastName: 'Doe',
        personalId: '04404476-5',
        phoneNumber: '50378965214',
        email: 'john@example.com',
        country: 'El Salvador',
        address: '',
        department: 'San Salvador',
        DOB: '5/14/1987',
        gender: 'Masculino',
        scholarship: true,
        assignedMonthlyPayment: '100.00',
        firstPaymentDate: '1/27/2023',
        lastPaymentDate: '3/27/2023',
        groups: 'PHTLS',
        accessLevel: 'user'

    },
    {
        id: '03',
        firstName: 'Scarllet',
        lastName: 'Johanson',
        personalId: '0842586-3',
        phoneNumber: '50378965214',
        email: 'sjohanson@aol.com',
        country: 'El Salvador',
        address: '',
        department: 'San Salvador',
        DOB: '5/14/1987',
        gender: 'Femenino',
        scholarship: false,
        assignedMonthlyPayment: '100.00',
        firstPaymentDate: '2/27/2023',
        lastPaymentDate: '3/27/2023',
        groups: 'REM',
        accessLevel: 'student'

    },
    {
        id: '04',
        firstName: 'Kristin',
        lastName: 'Kreuk',
        personalId: '0842586-3',
        phoneNumber: '8019657485',
        email: 'kkreuk@aol.com',
        country: 'Canada',
        address: '',
        department: 'Montreal',
        DOB: '5/14/1987',
        gender: 'Femenino',
        scholarship: false,
        assignedMonthlyPayment: '100.00',
        firstPaymentDate: '2/27/2023',
        lastPaymentDate: '3/27/2023',
        groups: 'TEM',
        accessLevel: 'admin'

    }
]

/*.reduce((collection, currentContact) => {
    collection[currentContact.id] = currentContact;
    return collection
}, ({} as Record<string, Contact>))*/