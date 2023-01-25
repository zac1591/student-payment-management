export const COLUMNS = [
    {
      Header: "Id",
      accessor: "id",
      disableFilters: true,
      sticky: "left"
    },
    {
      Header: "Nombre del Programa",
      accessor: "course_name",
      sticky: "left"
    },
    {
      Header: "Miembros",
      accessor: "members",
      sticky: "left",
      Cell: ({value}) => value.length
    },
    {
      Header: "Fecha de Creación",
      accessor: "creation_date"
    },
    
  ];
  