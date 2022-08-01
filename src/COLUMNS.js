export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    disableFilters: true,
    sticky: "left"
  },
  {
    Header: "First Name",
    accessor: "first_name",
    sticky: "left"
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    sticky: "left"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Phone",
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
  
];
