import React, { useState } from 'react'
import { Button, Card } from '@/components/ui'
import CustomTable from './CustomTable'
import { HiPencil, HiTrash } from 'react-icons/hi'
import ModalSarcini from './ModalSarcini'

const Sarcini = () => {
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
            header: 'ID',
            accessorKey: 'id',
        },
        {
            header: 'Cheie',
            accessorKey: 'cheie',
        },
        {
            header: 'Categorie',
            accessorKey: 'categorie',
        },
        {
            header: 'Status',
            accessorKey: 'status',
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
            id: '1',
            cheie: 'dasd786786dsada',
            categorie: 'alpha',
            status: 'Completed',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            cheie: 'dasd786786dsadx',
            categorie: 'beta',
            status: 'In progress',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            cheie: 'dasd786786dsady',
            categorie: 'gama',
            status: 'Pending',
            actiuni: 'Edit/Delete',
        },
        {
            id: '1',
            cheie: 'dasd786786dsada',
            categorie: 'alpha',
            status: 'Completed',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            cheie: 'dasd786786dsadx',
            categorie: 'beta',
            status: 'In progress',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            cheie: 'dasd786786dsady',
            categorie: 'gama',
            status: 'Pending',
            actiuni: 'Edit/Delete',
        },
        {
            id: '1',
            cheie: 'dasd786786dsada',
            categorie: 'alpha',
            status: 'Completed',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            cheie: 'dasd786786dsadx',
            categorie: 'beta',
            status: 'In progress',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            cheie: 'dasd786786dsady',
            categorie: 'gama',
            status: 'Pending',
            actiuni: 'Edit/Delete',
        },
        {
            id: '1',
            cheie: 'dasd786786dsada',
            categorie: 'alpha',
            status: 'Completed',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            cheie: 'dasd786786dsadx',
            categorie: 'beta',
            status: 'In progress',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            cheie: 'dasd786786dsady',
            categorie: 'gama',
            status: 'Pending',
            actiuni: 'Edit/Delete',
        },
        {
            id: '1',
            cheie: 'dasd786786dsada',
            categorie: 'alpha',
            status: 'Completed',
            actiuni: 'Edit/Delete',
        },
        {
            id: '2',
            cheie: 'dasd786786dsadx',
            categorie: 'beta',
            status: 'In progress',
            actiuni: 'Edit/Delete',
        },
        {
            id: '3',
            cheie: 'dasd786786dsady',
            categorie: 'gama',
            status: 'Pending',
            actiuni: 'Edit/Delete',
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
                    <p className=" text-3xl font-bold">45</p>
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
                    <p className=" text-3xl font-bold">10</p>
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
                    <p className=" text-3xl font-bold">5</p>
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
                    <p className=" text-3xl font-bold">30</p>
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
            </div>
        </div>
    )
}

export default Sarcini
