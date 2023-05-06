import { useState, useMemo } from 'react';
//tanstack table
import { PaginationState, useReactTable, getCoreRowModel, getPaginationRowModel, ColumnDef, flexRender } from '@tanstack/react-table';
//types
import { Contact } from '../../types';
//styles
import styles from './contactsTable.module.scss';

type ContactsTableProps = {
    columns: ColumnDef<Contact>[],
    stateData: {},
    navigatesTo: string,
    onSelectContact: () => void
}

function ContactsTable({ columns, stateData, navigatesTo, onSelectContact }: ContactsTableProps) {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10
    });
    const columnsData = useMemo<ColumnDef<Contact>[]>(() => columns, [columns]);
    const table = useReactTable({
        data: stateData,
        columns: columnsData,
        state: {
            pagination
        }

    })
  return (
    <table>

    </table>
  )
}

export default ContactsTable