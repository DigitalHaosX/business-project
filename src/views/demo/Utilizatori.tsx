import { Button } from '@/components/ui'
import { HiPencil, HiTrash } from 'react-icons/hi'
import CustomTable from './CustomTable'

const Utilizatori = () => {
    const handleEdit = () => {
        console.log('click')
    }
    const handleDelete = () => {
        console.log('click')
    }
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
    const handleAddRow = () => {
        console.log('click')
    }
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
                <CustomTable
                    columns={columns}
                    data={data}
                    actionButton={
                        <Button
                            onClick={handleAddRow}
                            style={{ background: '#0188cc', color: 'white' }}
                        >
                            Adauga utilizator
                        </Button>
                    }
                />
            </div>
        </div>
    )
}

export default Utilizatori
