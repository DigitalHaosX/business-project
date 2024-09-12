import { Button } from '../../components/ui'
import React, { useEffect, useState } from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi'
import CustomTable from './CustomTable'
import ModalAddClienti from './ModalAddClienti'
import ModalDelete from './ModalDelete'
import { fetchClients } from './clientService'

interface Client {
    id: number
    type: string
    name: string
    vat: string
    email: string
    phone: string
    billingAddress: string
    billingCity: string
    billingCounty: string
    billingPostalCode: string
    shippingAddress: string
    shippingCity: string
    shippingCounty: string
    shippingPostalCode: string
}

const Clienti = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [data, setData] = useState<Client[]>([])
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clients = await fetchClients()
                setData(clients)
                console.log('Clients', clients)
            } catch (error) {
                console.error('Error fetching clients:', error)
            }
        }

        fetchData()
    }, [])

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
                            style={{ background: '#0188cc', color: 'white' }}
                            onClick={handleOpenModal}
                        >
                            Adauga clienti
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
                    message="Sigur doriti sa stergeti acest proiect?"
                    onConfirmDelete={handleConfirmDelete}
                    onClose={handleCancelDelete}
                />
            </div>
        </div>
    )
}

export default Clienti
