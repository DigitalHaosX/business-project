import { Button } from '@/components/ui'
import React, { useState } from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi'
import CustomTable from './CustomTable'
import ModalConstatari from './ModalConstatari'
import { ColumnDef } from '@tanstack/react-table'

interface Constatare {
    id: string
    nume: string
    cost: string
    status: string
    comentarii: string
    operator: string
    actiuni: string
}

const Constatari = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedId, setSelectedId] = useState<string | null>(null) // State to store selected ID
    const [data, setData] = useState<Constatare[]>([
        {
            id: '1',
            nume: 'motor',
            cost: '500',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            nume: 'turbina',
            cost: '1500',
            status: 'Complet',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            nume: 'injectoare',
            cost: '2500',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '4',
            nume: 'transmisie',
            cost: '3500',
            status: 'In procesare',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '5',
            nume: 'evacuare',
            cost: '500',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '6',
            nume: 'John',
            cost: '500',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '8',
            nume: 'John',
            cost: '100',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '9',
            nume: 'John',
            cost: '300',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '10',
            nume: 'John',
            cost: '500',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '11',
            nume: 'John',
            cost: '200',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '12',
            nume: 'John',
            cost: '350',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '13',
            nume: 'John',
            cost: '220',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
        {
            id: '14',
            nume: 'John',
            cost: '800',
            status: 'Trimis catre receptie',
            comentarii: 'Ultimul comentariu pentru constatare',
            operator: 'Xulescu',
            actiuni: 'Edit/Delete',
        },
    ])
    const [selectedComentarii, setSelectedComentarii] = useState<string>('')

    const handleEdit = () => {
        console.log('Edit')
    }

    const handleDelete = (id: string) => {
        setData((prevData) => prevData.filter((item) => item.id !== id))
    }

    const handleOpenModal = (id: string) => {
        const selectedConstatare = data.find((item) => item.id === id)
        setSelectedId(id || null) // Set the selected ID if available
        setSelectedComentarii(selectedConstatare?.comentarii || '')
        setIsModalOpen(true) // Open the modal
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedId(null) // Reset the selected ID
    }

    const handleSaveComentarii = (id: string | null, comentarii: string) => {
        if (id) {
            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id
                        ? { ...item, comentarii } // Update the comment
                        : item,
                ),
            )
        }
    }

    const columns: ColumnDef<Constatare>[] = [
        {
            header: 'ID',
            accessorKey: 'id',
            cell: ({ row }) => (
                <span
                    className="text-blue-500 cursor-pointer hover:underline"
                    onClick={() => handleOpenModal(row.original.id)} // Pass the ID to the modal
                >
                    {row.original.id}
                </span>
            ),
        },
        {
            header: 'Nume',
            accessorKey: 'nume',
        },
        {
            header: 'Cost',
            accessorKey: 'cost',
        },
        {
            header: 'Status',
            accessorKey: 'status',
        },
        {
            header: 'Comentarii',
            accessorKey: 'comentarii',
        },
        {
            header: 'Operator',
            accessorKey: 'operator',
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
                        onClick={() => handleDelete(row.original.id)} // Delete the row by ID
                    >
                        <HiTrash />
                    </button>
                </div>
            ),
        },
    ]

    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">Constatari</h3>
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
                            onClick={() => handleOpenModal('N/A')} // Handle adding a new item
                        >
                            Adauga constatare
                        </Button>
                    }
                />
            </div>
            <div>
                <ModalConstatari
                    id={selectedId} // Pass the selected ID to the modal
                    isOpen={isModalOpen}
                    initialComentarii={selectedComentarii} // Pass the initial comments to the modal
                    onSaveComentarii={handleSaveComentarii} // Save the updated comments
                    onClose={handleCloseModal}
                />
            </div>
        </div>
    )
}

export default Constatari
