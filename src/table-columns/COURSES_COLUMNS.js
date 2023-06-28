export const columns = [
   {
      header: "Nombre del Curso",
      id: 'courseName',
      accessorKey: "courseName",
      sticky: "left"
   },
   {
      header: "Precio",
      id: 'coursePrice',
      accessorKey: "coursePrice",
      sticky: "left"
   },
   {
      header: "Matricula",
      id: 'registrationFee',
      accessorKey: "registrationFee"
   },
   {
      header: "Fecha Inicio",
      id: 'startDate',
      accessorKey: "startDate"
   },
   {
      header: "Fecha Finalización",
      id: 'endDate',
      accessorKey: "endDate"
   },
   {
      header: "Disponibilidad",
      id: 'isAvailable',
      accessorKey: "isAvailable",
      cell: info => info.getValue() ? 'Si' : 'No'
   },
]