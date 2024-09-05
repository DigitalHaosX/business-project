import { useNavigate } from 'react-router-dom'
import { Button, Card } from '../../components/ui'
import CustomTable from './CustomTable'
import { ColumnDef } from '@tanstack/react-table'
import { HiPencil, HiTrash } from 'react-icons/hi'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { fetchProjectStatistics } from './ProiecteService'

interface Proiect {
    id: string
    name: string
    cheie: string
    categorie: string
    status: string
    actiuni: string
}

const Proiecte = () => {
    const navigate = useNavigate()
    const [data, setData] = useState<Proiect[]>([])
    const [totalProjects, setTotalProjects] = useState<number | null>(null)

    const handleIdClick = (id: string) => {
        navigate(`/proiecte/${id}`)
    }

    const handleEdit = () => {
        console.log('click')
    }
    const handleDelete = () => {
        console.log('click')
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/api/projects',
                {
                    headers: {
                        accept: 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU1MzYxOTMsImV4cCI6MTcyNTYyMjU5M30.UpppikotyHefbAzq8bKE1omxNuOiAnf7n-ksD3Q9X5ISZDzwGfxwicD0L9wYTPTjI34NwQ7vS1o84bqUycIDkg',
                    },
                },
            )

            const projects = response.data
            console.log('API Response:', projects)

            // Map through the array of projects to extract relevant data
            const formattedData = projects.map((project: any) => ({
                id: project.id.toString(),
                name: project.name,
                status: project.status,
            }))
            setData(formattedData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchTotalProjects = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/api/projects/statistics',
                {
                    headers: {
                        accept: 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU1MzYxOTMsImV4cCI6MTcyNTYyMjU5M30.UpppikotyHefbAzq8bKE1omxNuOiAnf7n-ksD3Q9X5ISZDzwGfxwicD0L9wYTPTjI34NwQ7vS1o84bqUycIDkg',
                    },
                },
            )

            // Log the full response to verify it's coming through
            console.log('API Statistics Response:', response.data)

            // Extract the total from the response and update the state
            const totalProjects = response.data.total

            // Check if totalProjects is being set correctly
            console.log('Total Projects:', totalProjects)

            // Update the state with the total number of projects
            setTotalProjects(totalProjects)
        } catch (error) {
            console.error('Error fetching total projects:', error)
        }
    }

    useEffect(() => {
        fetchTotalProjects()
    }, [])

    /* const fetchTotalProjects = async () => {
        try {
            const response = await fetchProjectStatistics()
            console.log('Total Projects:', response.data.total) // Log the response data
            setTotalProjects(response.data.total)
        } catch (error) {
            console.error('Error fetching total projects:', error) // Log the error
        }
    }

    useEffect(() => {
        fetchTotalProjects()
    }, []) */

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
            accessorKey: 'categorie',
        },
        {
            header: 'Status',
            accessorKey: 'status',
        },
        {
            header: 'Operator',
            accessorKey: 'operator',
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

    /*    const data: Proiect[] = [
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
    ] */

    const handleAddRow = () => {
        console.log('click')
    }

    return (
        <div>
            <div>
                <h3 className="text-xl font-semibold mb-4">Proiecte</h3>
            </div>
            {/*   <div>
                <h4 className="text-lg font-semibold">Lista Proiecte:</h4>
                <ul>
                    {data.length > 0 ? (
                        data.map((project) => (
                            <li key={project.id} className="mb-2">
                                <strong>ID:</strong> {project.id} <br />
                                <strong>Nume Proiect:</strong> {project.name}{' '}
                                <br />
                                <strong>Status:</strong> {project.status}
                            </li>
                        ))
                    ) : (
                        <li>Nicio proiect nu a fost gasit.</li>
                    )}
                </ul>
            </div> */}
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
                            style={{ background: '#0188cc', color: 'white' }}
                            onClick={handleAddRow}
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
