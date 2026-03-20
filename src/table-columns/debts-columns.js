import IndeterminateCheckbox from "../components/UI/IndeterminateCheckbox/IndeterminateCheckbox";

export const debtColumns = [
    {
        id: "select",
        header: ({ table }) => (
            <IndeterminateCheckbox {
                ...{ checked: table.getIsAllRowsSelected(), indeterminate: table.getIsSomeRowsSelected(), onChange: table.getToggleAllRowsSelectedHandler() }
            } />
        ),

        cell: ({ row }) => (
            <IndeterminateCheckbox
                {...{
                    checked: row.getIsSelected(),
                    disabled: !row.getCanSelect(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                }}
            />
        )

    },
    {
        header: "Nombre",
        id: 'firstName',
        accessorKey: "firstName",
        sticky: "left"
    },
    {
        header: "Apellido",
        id: 'lastName',
        accessorKey: "lastName",
        sticky: "left"
    },
    {
        header: "Descripción",
        id: 'description',
        accessorKey: "description",
        sticky: "left"
    },
    {
        header: "Grupos",
        id: 'group',
        accessorKey: "group"
    },
    {
        header: "Fecha vto. Original",
        id: 'originalExpirationDate',
        accessorKey: "originalExpirationDate"
    },

    {
        header: 'Monto original',
        id: 'initialAmount',
        accessorKey: 'initialAmount'
    },
    {
        header: "Fecha de vencimiento",
        id: 'expirationDate',
        accessorKey: "expirationDate",

    },
    {
        header: "Vencimiento Activo",
        id: 'activeExpiration',
        accessorKey: "activeExpiration"
    },
    {
        header: "Actualizado a la fecha",
        id: 'upToDate',
        accessorKey: "upToDate",

    },
    {
        header: "Pagado",
        id: 'paid',
        accessorKey: "paid",
    },
    {
        header: "Fecha de pago",
        id: 'paidOn',
        accessorKey: "paidOn",
    },

];
