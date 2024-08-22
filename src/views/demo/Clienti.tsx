import React from 'react'
import CustomTable from './CustomTable'

const Clienti = () => {
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
                <CustomTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default Clienti
