export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    disableFilters: true,
    sticky: "left"
  },
  {
    Header: "Nombre",
    accessor: "first_name",
    sticky: "left"
  },
  {
    Header: "Apellido",
    accessor: "last_name",
    sticky: "left"
  },
  {
    Header: "Correo",
    accessor: "email"
  },
  {
    Header: "Teléfono",
    accessor: "phone_number"
  },
  {
    Header: "Becado",
    accessor: "scholarship",
    Cell: ({ value }) => value ? 'Si': 'No'
  },
  {
    Header: "Cuota Mensual Asignada",
    accessor: "assigned_monthly_payment"
  },
  {
    Header: "Acciones",
    accessor: "actions",
    disableFilters: true
  }
  
];
