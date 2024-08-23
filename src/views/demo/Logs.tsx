import React from 'react'
import CustomTable from './CustomTable'
import Button from '@/components/ui/Button'

const Logs = () => {
    const columns = [
        {
            header: 'Actiune',
            accessorKey: 'actiune',
        },
        {
            header: 'Ruta',
            accessorKey: 'ruta',
        },
        {
            header: 'Utilizator',
            accessorKey: 'utilizator',
        },
        {
            header: 'Rol',
            accessorKey: 'rol',
        },
        {
            header: 'Data',
            accessorKey: 'data',
        },
        {
            header: 'Statut',
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
            header: 'Modificare',
            accessorKey: 'modificare',
            cell: () => (
                <Button
                    className="text-white rounded"
                    style={{ backgroundColor: '#0188cc' }}
                >
                    👁️ Vizualizeaza
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
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'Vizualizeaza',
        },
        {
            actiune: 'GET',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'PUT',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'DELETE',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        {
            actiune: 'Task 1',
            ruta: 'Pending',
            utilizator: 'John Doe',
            rol: '2024-09-10',
            data: 'sss',
            statut: 'aaxxaayy',
            modificare: 'vizualizeaza',
        },
        // more data...
    ]
    return (
        <div
            className="mt-4"
            style={{
                border: '1px solid #d1d5db', // Tailwind's "gray-300" color
                borderRadius: '8px', // Optional: adds rounded corners
                padding: '16px', // Optional: adds padding inside the border
            }}
        >
            <CustomTable columns={columns} data={data} />
        </div>
    )
}

export default Logs
