import { Button } from '../../components/ui'
import React, { useEffect, useState } from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi'
import CustomTable from './CustomTable'
import ModalConstatari from './ModalConstatari'
import { ColumnDef } from '@tanstack/react-table'
import { fetchStatements } from './constatariService'
import { useNavigate, useParams } from 'react-router-dom'
import ModalDelete from './ModalDelete'

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
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>() // Get the ID from the URL
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [data, setData] = useState<Constatare[]>([])
    const [selectedComentarii, setSelectedComentarii] = useState<string>('')
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tasks = await fetchStatements()
                // Format the data if needed to match your table structure
                const formattedData = tasks.map((statement: any) => ({
                    id: statement.id.toString(),
                    name: statement.name || 'N/A',
                    status: statement.status,
                    description: statement.description || 'N/A',
                    cost: statement.cost,
                }))
                setData(formattedData)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        if (id) {
            // Check if an ID is present in the URL
            const selectedConstatare = data.find((item) => item.id === id)
            setSelectedId(id || null)
            setSelectedComentarii(selectedConstatare?.comentarii || '')
            setIsModalOpen(true)
        }
    }, [id, data]) // Run the effect when the ID or data changes

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

    const handleCancelDelete = () => {
        setIsDeleteModalOpen(false)
        setDeleteItemId(null)
    }

    const handleOpenModal = (id: string) => {
        navigate(`/constatari/${id}`) // Update the URL to include the ID
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedId(null)
        navigate('/constatari') // Reset the URL when the modal is closed
    }

    const handleDelete = (id: string) => {
        setData((prevData) => prevData.filter((item) => item.id !== id))
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
                        onClick={() => handleOpenModal(row.original.id)} // Open the modal by ID
                    >
                        <HiPencil />
                    </button>
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteClick(row.original.id)} // Delete the row by ID
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
                <ModalDelete
                    isOpen={isDeleteModalOpen}
                    message="Sigur doriti sa stergeti aceasta constatare?"
                    onConfirmDelete={handleConfirmDelete}
                    onClose={handleCancelDelete}
                />
            </div>
        </div>
    )
}

export default Constatari
