import React from 'react'
import CustomTable from './CustomTable'
import {
    HiDocumentRemove,
    HiDotsVertical,
    HiPencil,
    HiTrash,
} from 'react-icons/hi'
import { Button } from '@/components/ui'

const TipProiecte = () => {
    const handleEdit = () => {
        console.log('Edit')
    }
    const handleDelete = () => {
        console.log('Delete')
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
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit()}
                    >
                        <HiPencil />
                    </button>
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete()}
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
        console.log('click')
    }
    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">TipProiecte</h3>
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
                            style={{ background: '#0188cc', color: 'white' }}
                            onClick={handleAddRow}
                        >
                            Adauga cheie
                        </Button>
                    }
                />
            </div>
        </div>
    )
}

export default TipProiecte
