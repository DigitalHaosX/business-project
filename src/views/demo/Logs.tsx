import React from 'react'
import CustomTable from './CustomTable'
import Button from '@/components/ui/Button'

const Logs = () => {
    const columns = [
        {
            header: 'Action',
            accessorKey: 'actiune',
        },
        {
            header: 'Type',
            accessorKey: 'ruta',
        },
        {
            header: 'User',
            accessorKey: 'utilizator',
        },
        {
            header: 'Date',
            accessorKey: 'rol',
        },
        {
            header: 'Status',
            accessorKey: 'statut',
            cell: () => (
                <Button
                    className=" text-green-700 px-4 py-1 rounded-lg"
                    style={{ backgroundColor: '#d4edda' }}
                >
                    Success
                </Button>
            ),
        },
        {
            header: 'View',
            accessorKey: 'modificare',
            cell: () => (
                <Button
                    className="text-white rounded"
                    style={{ backgroundColor: '#0188cc' }}
                >
                    👁️ View
                </Button>
            ),
        },
    ]

    const data = [
        {
            actiune: 'POST',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'Vizualizeaza',
        },
        {
            actiune: 'GET',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'PUT',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'DELETE',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',

            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        // more data...
    ]
    return (
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
    )
}

export default Logs
