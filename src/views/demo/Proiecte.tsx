import { useNavigate } from 'react-router-dom'
import { Button, Card } from '../../components/ui'
import CustomTable from './CustomTable'
import { ColumnDef } from '@tanstack/react-table'
import { HiPencil, HiTrash } from 'react-icons/hi'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Proiect {
    id: string
    name: string
    status: string
    cheie: string
    categorie: string
    actiuni: string
}

const Proiecte = () => {
    const navigate = useNavigate()
    const [data, setData] = useState<Proiect[]>([])
    const [totalProjects, setTotalProjects] = useState<number | null>(null)
    const [newProjects, setNewProjects] = useState<number | null>(null)
    const [progressProjects, setProgressProjects] = useState<number | null>(
        null,
    )

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
                            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU2MjI2NjksImV4cCI6MTcyNTcwOTA2OX0.8CgO01LcJbIvCG8wYJ6VoQd80YDWWTfxYi4c6DLvaGU6opQ41tGM5lYN5lsz-szavoutewelOwqgmv0NCqgu5g',
                    },
                },
            )

            // Log the API response to see its structure
            console.log('API Response:', response.data)

            // Extract the project data from the "content" field
            const projects = response.data.content // Extracting the array from "content"

            // Check if projects is an array
            if (Array.isArray(projects)) {
                // Map through the array of projects and extract relevant data
                const formattedData = projects.map((project: any) => ({
                    id: project.id.toString(),
                    name: project.name,
                    categorie: project.description || 'N/A', // Adjust as per your data
                    status: project.status,
                    /*  operator: project.operator || 'Unknown', // Adjust as per your data
                    actiuni: '', // Placeholder for actions */
                }))

                console.log('Formatted Data:', formattedData) // Log the formatted data

                // Update the state with the formatted project data
                setData(formattedData)
            } else {
                console.error('Expected an array, but got:', projects)
            }
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
                            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU2MjI2NjksImV4cCI6MTcyNTcwOTA2OX0.8CgO01LcJbIvCG8wYJ6VoQd80YDWWTfxYi4c6DLvaGU6opQ41tGM5lYN5lsz-szavoutewelOwqgmv0NCqgu5g',
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

    const fetchNewProjects = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/api/projects/statistics',
                {
                    headers: {
                        accept: 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU2MjI2NjksImV4cCI6MTcyNTcwOTA2OX0.8CgO01LcJbIvCG8wYJ6VoQd80YDWWTfxYi4c6DLvaGU6opQ41tGM5lYN5lsz-szavoutewelOwqgmv0NCqgu5g',
                    },
                },
            )

            // Log the full response to verify it's coming through
            console.log('API Statistics Response:', response.data)

            // Extract the total from the response and update the state
            const newProjects = response.data.newProjects

            // Check if totalProjects is being set correctly
            console.log('New Projects:', newProjects)

            // Update the state with the total number of projects
            setNewProjects(newProjects)
        } catch (error) {
            console.error('Error fetching new projects:', error)
        }
    }

    useEffect(() => {
        fetchNewProjects()
    }, [])

    const fetchProgressProjects = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/api/projects/statistics',
                {
                    headers: {
                        accept: 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU2MjI2NjksImV4cCI6MTcyNTcwOTA2OX0.8CgO01LcJbIvCG8wYJ6VoQd80YDWWTfxYi4c6DLvaGU6opQ41tGM5lYN5lsz-szavoutewelOwqgmv0NCqgu5g',
                    },
                },
            )
 
            // Log the full response to verify it's coming through
            console.log('API Statistics Response:', response.data.approved)

            // Extract the total from the response and update the state
            const progressProjects = response.data.approved

            // Check if totalProjects is being set correctly
            console.log('Progress Projects:', progressProjects)

            // Update the state with the total number of projects
            setProgressProjects(progressProjects)
        } catch (error) {
            console.error('Error fetching progress projects:', error)
        }
    }

    useEffect(() => {
        fetchProgressProjects()
    }, [])

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
