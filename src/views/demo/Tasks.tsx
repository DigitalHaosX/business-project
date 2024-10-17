import React, { useState } from 'react'
import { Button, Card } from '../../components/ui'
import CustomTable from './CustomTable'
import { HiPencil, HiTrash } from 'react-icons/hi'
import ModalTasks from './ModalTasks'
import ModalDelete from './ModalDelete'

const str = ''

const isPalindrome = (str: string) => {
    console.log('Word', str)
    const reversed = str.split('').reverse().join('')
    console.log('Reversed word', reversed)
    return str === reversed
}

console.log(isPalindrome(str))

const arr = [1, 3, 3, 5, 5, 45, 213, 34534, 22, 4, 5]

const unique = [...new Set(arr)]

console.log(unique)

const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5)
}

console.log(shuffle(arr))

const mockTotalTasks = 10
const mockToDoTasks = 4
const mockInProgress = 3
const mockDoneTasks = 3

const mockData = [
    {
        id: '1',
        name: 'Design the homepage',
        description: 'Create the homepage for the new project',
        status: 'In Progress',
        priority: 'High',
    },
    {
        id: '2',
        name: 'Set up authentication',
        description: 'Integrate OAuth login',
        status: 'To Do',
        priority: 'Medium',
    },
    {
        id: '3',
        name: 'Fix bugs in checkout flow',
        description: 'Resolve payment gateway issues',
        status: 'Done',
        priority: 'High',
    },
    {
        id: '4',
        name: 'Write documentation',
        description: 'Document the backend APIs',
        status: 'To Do',
        priority: 'Low',
    },
]

const Tasks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [data, setData] = useState<any[]>(mockData)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null)

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

    const handleSaveNewTask = (newTask: any) => {
        setData((prevData) => [...prevData, newTask])
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
                <h3 className="text-3xl font-semibold mb-4">Tasks</h3>
            </div>
            <div className="flex flex-row justify-between gap-4 ">
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-black">
                                Tasks
                            </span>
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-3xl font-bold">{mockTotalTasks}</p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-black">
                                Tasks in waiting
                            </span>
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-3xl font-bold">{mockToDoTasks}</p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-black">
                                Tasks in progress
                            </span>
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-3xl font-bold">{mockInProgress}</p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-black">
                                Finished Tasks
                            </span>
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-3xl font-bold">{mockDoneTasks}</p>
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
                <h3 className="text-3xl font-semibold mb-4 mt-4">All Tasks</h3>
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
                            Add Tasks
                        </Button>
                    }
                />
            </div>
            <div>
                <ModalTasks
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSaveNewTask}
                />
                <ModalDelete
                    isOpen={isDeleteModalOpen}
                    message="Are you sure you want to delete this task?"
                    onConfirmDelete={handleConfirmDelete}
                    onClose={handleCancelDelete}
                />
            </div>
        </div>
    )
}

export default Tasks
