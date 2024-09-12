import { useNavigate } from 'react-router-dom'
import { Button, Card } from '../../components/ui'
import CustomTable from './CustomTable'
import { ColumnDef } from '@tanstack/react-table'
import { HiPencil, HiTrash } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import ModalDelete from './ModalDelete'
import ModalAddProjects from './ModalAddProjects'

// Importing service functions
import {
    fetchProjects,
    fetchTotalProjects,
    fetchNewProjects,
    fetchProgressProjects,
    fetchFinishedProjects,
} from './projectService'

import { fetchUsers } from './homeService'

interface Proiect {
    createDate: string
    updateDate: string
    id: string
    name: string
    description: string
    type: string
    createdById: number
    status: string
    checkpoint: string
    projectClientId: number
    taskCount: number
    completedTaskCount: number
    materialCost: number
    laborCost: number
    discount: number
    discountType: string
    paymentType: string
    paymentDate: string
    vat: number
    totalCost: number
    totalCostDiscounted: number
    discountCalculated: number
    vatCalculated: number
    totalCostWithVat: number
    discountedLaborCost: number
}
interface User {
    id: number
    username: string
    firstName: string
    lastName: string
    role: string
    whitePoints: number
    blackPoints: number
}

const Proiecte = () => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [data, setData] = useState<Proiect[]>([])
    const [users, setUsers] = useState<User[]>([])
    const [totalProjects, setTotalProjects] = useState<number | null>(null)
    const [newProjects, setNewProjects] = useState<number | null>(null)
    const [progressProjects, setProgressProjects] = useState<number | null>(
        null,
    )
    const [finishedProjects, setFinishedProjects] = useState<number | null>(
        null,
    )
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null)

    const handleIdClick = (id: string) => {
        navigate(`/proiecte/${id}`)
    }

    const handleEdit = () => {
        console.log('Edit')
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await fetchProjects()
                setData(projects)
                console.log('Projects', projects)
            } catch (error) {
                console.error('Error fetching projects:', error)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData: User[] = await fetchUsers() // Ensure fetchUsers returns User[]
                setUsers(userData)
                console.log('User data', userData)
            } catch (error) {
                console.error('Error fetching user data:', error)
            }
        }

        fetchUserData()
    }, [])

    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const total = await fetchTotalProjects()
                setTotalProjects(total)

                const newProjects = await fetchNewProjects()
                setNewProjects(newProjects)

                const progress = await fetchProgressProjects()
                setProgressProjects(progress)

                const finished = await fetchFinishedProjects()
                setFinishedProjects(finished)
            } catch (error) {
                console.error('Error fetching statistics:', error)
            }
        }

        fetchStatistics()
    }, [])

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

    const getUserName = (userId: number) => {
        const user = users.find((user) => user.id === userId)
        return user ? `${user.firstName} ${user.lastName}` : 'Unknown'
    }

    const columns: ColumnDef<Proiect>[] = [
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
            header: 'Nume Proiect',
            accessorKey: 'name',
        },
        {
            header: 'Categorie',
            accessorKey: 'type',
        },
        {
            header: 'Descriere',
            accessorKey: 'description',
        },
        {
            header: 'Status',
            accessorKey: 'status',
        },
        {
            header: 'Operator',
            accessorKey: 'createdById',
            cell: ({ row }) => (
                <span>{getUserName(row.original.createdById)}</span>
            ),
        },
        {
            header: 'Actiuni',
            accessorKey: 'actiuni',
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
                <h3 className="text-xl font-semibold mb-4">Proiecte</h3>
            </div>
            <div className="flex flex-row justify-between">
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Proiecte</h5>
                    <p className="mt-4 text-4xl font-bold">
                        {totalProjects !== null ? totalProjects : 'N/A'}
                    </p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">
                        Proiecte in pregatire
                    </h5>
                    <p className="mt-4 text-4xl font-bold">
                        {newProjects !== null ? newProjects : 'N/A'}
                    </p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Proiecte in progres</h5>
                    <p className="mt-4 text-4xl font-bold">
                        {' '}
                        {progressProjects !== null ? progressProjects : 'N/A'}
                    </p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Proiecte finalizate</h5>
                    <p className="mt-4 text-4xl font-bold">
                        {finishedProjects !== null ? finishedProjects : 'N/A'}
                    </p>
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
                            Adauga proiecte
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
                    message="Sigur doriti sa stergeti acest proiect?"
                    onConfirmDelete={handleConfirmDelete}
                    onClose={handleCancelDelete}
                />
            </div>
        </div>
    )
}

export default Proiecte
