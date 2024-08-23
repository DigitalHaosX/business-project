import { Button } from '@/components/ui'
import React from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi'
import { text } from 'stream/consumers'
import CustomTable from './CustomTable'

const Clienti = () => {
    const handleEdit = () => {
        console.log('click')
    }
    const handleDelete = () => {
        console.log('click')
    }
    const columns = [
        {
            header: 'ID',
            accessorKey: 'id',
        },
        {
            header: 'Cheie',
            accessorKey: 'cheie',
        },
        {
            header: 'Categorie',
            accessorKey: 'categorie',
        },
        {
            header: 'Status',
            accessorKey: 'status',
        },
        {
            header: 'Actiuni',
            accessorKey: 'actiuni',
            cell: () => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => handleEdit()}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <HiPencil />
                    </button>
                    <button
                        onClick={() => handleDelete()}
                        className="text-red-500 hover:text-red-700"
                    >
                        <HiTrash />
                    </button>
                </div>
            ),
        },
    ]

    const data = [
        {
            id: '1',
            cheie: 'dasd786786dsada',
            categorie: 'alpha',
            status: 'Completed',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            cheie: 'dasd786786dsadx',
            categorie: 'beta',
            status: 'In progress',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            cheie: 'dasd786786dsady',
            categorie: 'gama',
            status: 'Pending',
            actiuni: 'Edit/Delete',
        },
        {
            id: '1',
            cheie: 'dasd786786dsada',
            categorie: 'alpha',
            status: 'Completed',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            cheie: 'dasd786786dsadx',
            categorie: 'beta',
            status: 'In progress',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            cheie: 'dasd786786dsady',
            categorie: 'gama',
            status: 'Pending',
            actiuni: 'Edit/Delete',
        },
        {
            id: '1',
            cheie: 'dasd786786dsada',
            categorie: 'alpha',
            status: 'Completed',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            cheie: 'dasd786786dsadx',
            categorie: 'beta',
            status: 'In progress',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            cheie: 'dasd786786dsady',
            categorie: 'gama',
            status: 'Pending',
            actiuni: 'Edit/Delete',
        },
        {
            id: '1',
            cheie: 'dasd786786dsada',
            categorie: 'alpha',
            status: 'Completed',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            cheie: 'dasd786786dsadx',
            categorie: 'beta',
            status: 'In progress',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            cheie: 'dasd786786dsady',
            categorie: 'gama',
            status: 'Pending',
            actiuni: 'Edit/Delete',
        },
        {
            id: '1',
            cheie: 'dasd786786dsada',
            categorie: 'alpha',
            status: 'Completed',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            cheie: 'dasd786786dsadx',
            categorie: 'beta',
            status: 'In progress',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            cheie: 'dasd786786dsady',
            categorie: 'gama',
            status: 'Pending',
            actiuni: 'Edit/Delete',
        },
    ]
    const handleAddRow = () => {
        // Logic to add a new row
    }
    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">Clienti</h3>
            </div>
            <div
                className="mt-4"
                style={{
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '16px',
                }}
            >
                <CustomTable
                    columns={columns}
                    data={data}
                    actionButton={
                        <Button
                            onClick={handleAddRow}
                            style={{ background: '#0188cc', color: 'white' }}
                        >
                            Adauga clienti
                        </Button>
                    }
                />
            </div>
        </div>
    )
}

export default Clienti
