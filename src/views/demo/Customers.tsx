import { Button } from '../../components/ui'
import React, { useState } from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi'
import CustomTable from './CustomTable'
import ModalAddClienti from './ModalAddClienti'
import ModalDelete from './ModalDelete'

const Clienti = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null)
    const [data, setData] = useState([
        {
            id: '1',
            name: 'client1',
            type: 'NEW',
            description: 'This is the 1st customer',
            vat: '19%',
            email: 'first@customer.com',
            phone: '0750xxx001',
            billingAddress: '21 st NY',
            shippingAddress: '21 st NY',
        },
        {
            id: '2',
            name: 'client2',
            type: 'NEW',
            description: 'This is the 2nd customer',
            vat: '19%',
            email: 'second@customer.com',
            phone: '0750xxx001',
            billingAddress: '22 st NY',
            shippingAddress: '22 st NY',
        },
    ])

    const handleEdit = () => {
        console.log('Edit')
    }

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const columns = [
        {
            header: 'ID',
            accessorKey: 'id',
        },
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Type',
            accessorKey: 'type',
        },
        {
            header: 'VAT',
            accessorKey: 'vat',
        },
        {
            header: 'Email',
            accessorKey: 'email',
        },
        {
            header: 'Phone',
            accessorKey: 'phone',
        },
        {
            header: 'Billing Address',
            accessorKey: 'billingAddress',
        },
        {
            header: 'Shipping Address',
            accessorKey: 'shippingAddress',
        },
        {
            header: 'Actiuni',
            accessorKey: 'actiuni',
            cell: ({ row }) => (
                <div className="flex space-x-2">
                    <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit()}
                    >
                        <HiPencil />
                    </button>
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteClick(row.original.id)}
                    >
                        <HiTrash />
                    </button>
                </div>
            ),
        },
    ]

    const handleDeleteClick = (id: string) => {
        setDeleteItemId(id)
        setIsDeleteModalOpen(true)
    }

    const handleConfirmDelete = () => {
        if (deleteItemId) {
            handleDelete(deleteItemId)
            setIsDeleteModalOpen(false)
        }
    }

    const handleDelete = (id: string) => {
        setData((prevData) => prevData.filter((item) => item.id !== id))
    }

    const handleCancelDelete = () => {
        setIsDeleteModalOpen(false)
        setDeleteItemId(null)
    }

    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">Customers</h3>
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
                            onClick={handleOpenModal}
                        >
                            Add customers
                        </Button>
                    }
                />
            </div>
            <div>
                <ModalAddClienti
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </div>
            <div>
                <ModalDelete
                    isOpen={isDeleteModalOpen}
                    message="Are you sure you want to delete this customer?"
                    onConfirmDelete={handleConfirmDelete}
                    onClose={handleCancelDelete}
                />
            </div>
        </div>
    )
}

export default Clienti
