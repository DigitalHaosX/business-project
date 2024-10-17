import { useNavigate } from 'react-router-dom'
import { Button, Card } from '../../components/ui'
import CustomTable from './CustomTable'
import { HiPencil, HiTrash } from 'react-icons/hi'
import { useState } from 'react'
import ModalDelete from './ModalDelete'
import ModalAddProjects from './ModalAddProjects'

const Projects = () => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null)
    const [data, setData] = useState([
        {
            id: '1',
            name: 'project1',
            type: 'NEW',
            description: 'This is the 1st project',
            status: 'In Progress',
            user: 'User Name',
            actions: 'Edit/Delete',
        },
        {
            id: '2',
            name: 'project2',
            type: 'NEW',
            description: 'This is the 2nd project',
            status: 'In Progress',
            user: 'User Name',
            actions: 'Edit/Delete',
        },
    ])

    const handleIdClick = (id: string) => {
        navigate(`/projects/${id}`)
    }

    const handleEdit = () => {
        console.log('Edit')
    }

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
            cell: ({ row }) => (
                <span
                    className="text-blue-500 cursor-pointer hover:underline"
                    onClick={() => handleIdClick(row.original.id)}
                >
                    {row.original.id}
                </span>
            ),
        },
        {
            header: 'Project Name',
            accessorKey: 'name',
        },
        {
            header: 'Category',
            accessorKey: 'type',
        },
        {
            header: 'Description',
            accessorKey: 'description',
        },
        {
            header: 'Status',
            accessorKey: 'status',
        },
        {
            header: 'User',
            accessorKey: 'user',
        },
        {
            header: 'Actions',
            accessorKey: 'actions',
            cell: ({ row }) => (
                <div className="flex space-x-2">
                    <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit()} // Open the modal by ID
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
                <h3 className="text-xl font-semibold mb-4">Projects</h3>
            </div>
            <div className="flex flex-row justify-between">
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Projects</h5>
                    <p className="mt-4 text-4xl font-bold">30</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">
                        Projects Waiting Status
                    </h5>
                    <p className="mt-4 text-4xl font-bold">10</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Projects In Progress</h5>
                    <p className="mt-4 text-4xl font-bold">15</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Finished Projects</h5>
                    <p className="mt-4 text-4xl font-bold">12</p>
                </Card>
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
                            Add Projects
                        </Button>
                    }
                />
            </div>
            <div>
                <ModalAddProjects
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </div>
            <div>
                <ModalDelete
                    isOpen={isDeleteModalOpen}
                    message="Are you sure you want to delete this project?"
                    onConfirmDelete={handleConfirmDelete}
                    onClose={handleCancelDelete}
                />
            </div>
        </div>
    )
}

export default Projects
