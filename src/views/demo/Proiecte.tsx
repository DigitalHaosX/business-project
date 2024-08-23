import { useNavigate } from 'react-router-dom'
import { Button, Card } from '@/components/ui'
import CustomTable from './CustomTable'
import { ColumnDef } from '@tanstack/react-table'
import { HiPencil, HiTrash } from 'react-icons/hi'

interface Proiect {
    id: string
    cheie: string
    categorie: string
    status: string
    actiuni: string
}

const Proiecte = () => {
    const navigate = useNavigate()

    const handleIdClick = (id: string) => {
        navigate(`/proiecte/${id}`)
    }

    const handleEdit = () => {
        console.log('click')
    }
    const handleDelete = () => {
        console.log('click')
    }

    const columns: ColumnDef<Proiect>[] = [
        {
            header: 'ID',
            accessorKey: 'id',
            cell: ({ row }) => (
                <span
                    onClick={() => handleIdClick(row.original.id)}
                    className="text-blue-500 cursor-pointer hover:underline"
                >
                    {row.original.id}
                </span>
            ),
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
                        onClick={() => handleEdit()}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <HiPencil />
                    </button>
                    <button
                        onClick={() => handleDelete()}
                        className="text-red-500 hover:text-red-700"
                    >
                        <HiTrash />
                    </button>
                </div>
            ),
        },
    ]

    const data: Proiect[] = [
        {
            id: '11',
            cheie: 'fsdF7686FSD',
            categorie: 'Pro edition retail',
            status: 'used',
            actiuni: 'edit/delete',
        },
        {
            id: '12',
            cheie: 'fsdF7686FSD',
            categorie: 'Pro edition retail',
            status: 'used',
            actiuni: 'edit/delete',
        },
        {
            id: '13',
            cheie: 'fsdF7686FSD',
            categorie: 'Pro edition retail',
            status: 'used',
            actiuni: 'edit/delete',
        },
        {
            id: '14',
            cheie: 'fsdF7686FSD',
            categorie: 'Pro edition retail',
            status: 'used',
            actiuni: 'edit/delete',
        },
        {
            id: '15',
            cheie: 'fsdF7686FSD',
            categorie: 'Pro edition retail',
            status: 'used',
            actiuni: 'edit/delete',
        },
        {
            id: '16',
            cheie: 'fsdF7686FSD',
            categorie: 'Pro edition retail',
            status: 'used',
            actiuni: 'edit/delete',
        },
        {
            id: '17',
            cheie: 'fsdF7686FSD',
            categorie: 'Pro edition retail',
            status: 'used',
            actiuni: 'edit/delete',
        },
        {
            id: '18',
            cheie: 'fsdF7686FSD',
            categorie: 'Pro edition retail',
            status: 'used',
            actiuni: 'edit/delete',
        },
        {
            id: '19',
            cheie: 'fsdF7686FSD',
            categorie: 'Pro edition retail',
            status: 'used',
            actiuni: 'edit/delete',
        },
        {
            id: '20',
            cheie: 'fsdF7686FSD',
            categorie: 'Pro edition retail',
            status: 'used',
            actiuni: 'edit/delete',
        },
        // more data...
    ]

    const handleAddRow = () => {
        console.log('click')
    }

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
                    <p className="mt-4 text-4xl font-bold">45</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">
                        Proiecte in pregatire
                    </h5>
                    <p className="mt-4 text-4xl font-bold">10</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Proiecte in progres</h5>
                    <p className="mt-4 text-4xl font-bold">5</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Proiecte finalizate</h5>
                    <p className="mt-4 text-4xl font-bold">30</p>
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
                            onClick={handleAddRow}
                            style={{ background: '#0188cc', color: 'white' }}
                        >
                            Adauga proiect
                        </Button>
                    }
                />
            </div>
        </div>
    )
}

export default Proiecte
