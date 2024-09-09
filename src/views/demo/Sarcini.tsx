import React, { useEffect, useState } from 'react'
import { Button, Card } from '../../components/ui'
import CustomTable from './CustomTable'
import { HiPencil, HiTrash } from 'react-icons/hi'
import ModalSarcini from './ModalSarcini'
import {
    fetchTotalTasks,
    fetchToDoTasks,
    fetchInProgress,
    fetchDone,
    fetchTasks,
} from './sarciniService'
import ModalDelete from './ModalDelete'

const Sarcini = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [totalTasks, setTotalTasks] = useState<number | null>(null)
    const [toDoTasks, setToDoTasks] = useState<number | null>(null)
    const [inProgress, setInProgress] = useState<number | null>(null)
    const [done, setDone] = useState<number | null>(null)
    const [data, setData] = useState<any[]>([])
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null)

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [tasks, todo, inprogress, done] = await Promise.all([
                    fetchTotalTasks(),
                    fetchToDoTasks(),
                    fetchInProgress(),
                    fetchDone(),
                ])
                setTotalTasks(tasks)
                setToDoTasks(todo)
                setInProgress(inprogress)
                setDone(done)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchAllData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tasks = await fetchTasks()
                // Format the data if needed to match your table structure
                const formattedData = tasks.map((task: any) => ({
                    id: task.id.toString(),
                    name: task.name,
                    description: task.description || 'N/A',
                    status: task.status,
                    priority: task.priority,
                }))
                setData(formattedData)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
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
            header: 'Description',
            accessorKey: 'description',
        },
        {
            header: 'Status',
            accessorKey: 'status',
        },
        {
            header: 'Priority',
            accessorKey: 'priority',
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

    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">Sarcini</h3>
            </div>
            <div className="flex flex-row justify-between gap-4 ">
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-black">
                                Sarcini
                            </span>
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-3xl font-bold">
                        {totalTasks !== null ? totalTasks : 'N/A'}
                    </p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-black">
                                Sarcini in asteptare
                            </span>
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-3xl font-bold">
                        {toDoTasks !== null ? toDoTasks : 'N/A'}
                    </p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-black">
                                Sarcini in progres
                            </span>
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-3xl font-bold">
                        {inProgress !== null ? inProgress : 'N/A'}
                    </p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-black">
                                Sarcini finalizate
                            </span>
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-3xl font-bold">
                        {done !== null ? done : 'N/A'}
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
                <CustomTable columns={columns} data={data} />
            </div>
            <div>
                <h3 className="text-3xl font-semibold mb-4 mt-4">
                    Toate Sarcinile
                </h3>
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
                            Adauga sarcini
                        </Button>
                    }
                />
            </div>
            <div>
                <ModalSarcini isOpen={isModalOpen} onClose={handleCloseModal} />
                <ModalDelete
                    isOpen={isDeleteModalOpen}
                    message="Sigur doriti sa stergeti aceasta sarcina?"
                    onConfirmDelete={handleConfirmDelete}
                    onClose={handleCancelDelete}
                />
            </div>
        </div>
    )
}

export default Sarcini
