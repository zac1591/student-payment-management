export const user_data = [
    { 
        id: crypto.randomUUID(),
        nombre: 'Anne',
        apellido: 'Grey' ,
        telefono: '78956574',
        foto: './src/assets/profile-arina.jpg',
        email: 'someemail@wxample.com',
        userId: '02547896-8',
        cursos: [ {
            id: crypto.randomUUID(),
            nombre: 'nombreDelCursoPagounico',

        } ],
        suscripciones: [{ 
            id: crypto.randomUUID(),
            nombre: 'PEM'
        }],

        finanzas: { 
            pagos: [
                {
                    id: crypto.getRandomValues(),
                    nombre: 'PEM',
                    monto: 250,
                    fecha: new Date().getDate()
                }
            ],
            deudas: [
                {
                    id: crypto.getRandomValues(),
                    nombre: 'PHTLS',
                    monto: 200,
                    fecha: new Date().getDate()
                }
            ]
        },
        notas: [
            {
                id: crypto.getRandomValues(),
                titulo: 'Some title',
                mensaje:'Some random note about life',
                fecha: new Date().getDate(),
                hora: new Date().getTime()
            },
            {
                id: crypto.getRandomValues(),
                titulo: 'Anotehr title',
                mensaje:'another random note about life',
                fecha: new Date().getDate(),
                hora: new Date().getTime()
            }
        ]
    }
]