import { Card } from '@/components/ui'
import CustomTable from './CustomTable'

const Utilizatori = () => {
    const columns = [
        {
            header: 'Email',
            accessorKey: 'email',
        },
        {
            header: 'First Name',
            accessorKey: 'firstName',
        },
        {
            header: 'Last Name',
            accessorKey: 'lastName',
        },
        {
            header: 'Role',
            accessorKey: 'role',
        },
        {
            header: 'Actions',
            accessorKey: 'actions',
        },
    ]

    const data = [
        {
            email: 'admin@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            role: 'admin',
            actions: '',
        },
        {
            email: 'user@gmail.com',
            firstName: 'Mark',
            lastName: 'Up',
            role: 'user',
            actions: '',
        },
        {
            email: 'admin@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            role: 'admin',
            actions: '',
        },
        {
            email: 'user@gmail.com',
            firstName: 'Mark',
            lastName: 'Up',
            role: 'user',
            actions: '',
        },
        {
            email: 'admin@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            role: 'admin',
            actions: '',
        },
        {
            email: 'user@gmail.com',
            firstName: 'Mark',
            lastName: 'Up',
            role: 'user',
            actions: '',
        },
        {
            email: 'admin@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            role: 'admin',
            actions: '',
        },
        {
            email: 'user@gmail.com',
            firstName: 'Mark',
            lastName: 'Up',
            role: 'user',
            actions: '',
        },
        {
            email: 'admin@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            role: 'admin',
            actions: '',
        },
        {
            email: 'user@gmail.com',
            firstName: 'Mark',
            lastName: 'Up',
            role: 'user',
            actions: '',
        },
        // more data...
    ]
    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">Utilizatori</h3>
            </div>
            <div className="flex flex-row justify-between gap-4 "></div>
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

export default Utilizatori
