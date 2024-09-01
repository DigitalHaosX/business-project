import { Button } from '@/components/ui'
import { useState } from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi'
import CustomTable from './CustomTable'
import ModalAddUser from './ModalAddUser'

const Utilizatori = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleEdit = () => {
        console.log('Edit')
    }

    const handleDelete = () => {
        console.log('Delete')
    }

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
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
                <CustomTable
                    columns={columns}
                    data={data}
                    actionButton={
                        <Button
                            style={{ background: '#0188cc', color: 'white' }}
                            onClick={handleOpenModal}
                        >
                            Adauga utilizator
                        </Button>
                    }
                />
            </div>
            <div>
                <ModalAddUser isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
        </div>
    )
}

export default Utilizatori
