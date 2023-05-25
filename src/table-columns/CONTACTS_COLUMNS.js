import IndeterminateCheckbox from "../components/UI/IndeterminateCheckbox/IndeterminateCheckbox";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "Nombre",
    accessor: "firstName",
    sticky: "left"
  },
  {
    Header: "Apellido",
    accessor: "lastName",
    sticky: "left"
  },
  {
    Header: "Correo",
    accessor: "email"
  },
  {
    Header: "Teléfono",
    accessor: "phoneNumber"
  },
  {
    Header: "Becado",
    accessor: "scholarship",
    Cell: ({ value }) => value ? 'Si': 'No'
  },
  {
    Header: "Cuota Mensual Asignada",
    accessor: "assignedMonthlyPayment"
  },
  {
    Header: "Acciones",
    accessor: "actions",
    disableFilters: true
  }
  
];

export const newColumns = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox {
        ...{ checked: table.getIsAllRowsSelected(), indeterminate: table.getIsSomeRowsSelected(), onChange: table.getToggleAllRowsSelectedHandler()} 
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
    header: "Correo",
    id: 'email',
    accessorKey: "email"
  },
  {
    header: "Teléfono",
    id: 'phoneNumber',
    accessorKey: "phoneNumber"
  },
  {
    header: "Becado",
    id: 'scholarship',
    accessorKey: "scholarship",
    cell: info => info.getValue() ? 'Si' : 'No'
  },
  {
    header: "Grupos",
    id: 'groups',
    accessorKey: "groups",
  },
  {
    header: "Cuota Mensual",
    id: 'assignedMonthlyPayment',
    accessorKey: "assignedMonthlyPayment"
  }                                                                        
]
