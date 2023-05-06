export const contacts = [
    {
        id: crypto.randomUUID(),
        firstName: 'Gar',
        lastName: 'Satterley',
        personalId: '04402486-8',
        phoneNumber: '50378965214',
        email: 'gar@aol.com',
        country: 'El Salvador',
        address:'',
        department: 'San Salvador',
        DOB: '5/14/1987',
        gender: 'Masculino',
        scholarship: false,
        assignedMonthlyPayment: '100.00',
        firstPaymentDate: '4/27/2023',
        lastPaymentDate: '3/27/2023',
        groups: 'PEM'

    },
    {
        id: crypto.randomUUID(),
        firstName: 'John',
        lastName: 'Doe',
        personalId: '04404476-5',
        phoneNumber: '50378965214',
        email: 'john@example.com',
        country: 'El Salvador',
        address:'',
        department: 'San Salvador',
        DOB: '5/14/1987',
        gender: 'Masculino',
        scholarship: false,
        assignedMonthlyPayment: '100.00',
        firstPaymentDate: '1/27/2023',
        lastPaymentDate: '3/27/2023',
        groups: 'PEM'

    },
    {
        id: crypto.randomUUID(),
        firstName: 'Scarllet',
        lastName: 'JOhanson',
        personalId: '0842586-3',
        phoneNumber: '50378965214',
        email: 'sjohanson@aol.com',
        country: 'El Salvador',
        address:'',
        department: 'San Salvador',
        DOB: '5/14/1987',
        gender: 'Femenino',
        scholarship: false,
        assignedMonthlyPayment: '100.00',
        firstPaymentDate: '2/27/2023',
        lastPaymentDate: '3/27/2023',
        groups: 'PEM'

    }
]

/*.reduce((collection, currentContact) => {
    collection[currentContact.id] = currentContact;
    return collection
}, ({} as Record<string, Contact>))*/