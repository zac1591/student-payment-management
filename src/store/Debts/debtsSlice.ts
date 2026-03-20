import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    debts: [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            description: 'Esta es una descripción de prueba',
            group: 'PEM',
            originalExpirationDate: '11/12/2023',
            initialAmount: 500,
            expirationDate: '10/12/2023',
            activeExpiration: '15/1/2024',
            upToDate: 200,
            paid: 350,
            paidOn: '10/11/2023'


        }
    ]
}


const debtsSlice = createSlice({
    name: 'debts',
    initialState: INITIAL_STATE,
    reducers: {}
})

export default debtsSlice.reducer