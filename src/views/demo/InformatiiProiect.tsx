import React, { useState, useEffect } from 'react'
import { Button, Card, Dropdown, Input } from '../../components/ui'
import { HiMinusCircle, HiPlusCircle, HiUserCircle } from 'react-icons/hi'
import {
    fetchProjects,
    updateProjectDescription,
    updateProjectType,
    updateProject,
} from './projectService'
import { useParams } from 'react-router-dom'
import { fetchUsers } from '../../views/demo/homeService'

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

const InformatiiProiect = () => {
    const { id } = useParams<{ id: string }>()
    const [data, setData] = useState<Proiect[]>([])
    const [projectName, setProjectName] = useState<string>('')
    const [selectedProjectId, setSelectedProjectId] = useState<string>('')
    const [projectDescription, setProjectDescription] = useState<string>('')
    const [users, setUsers] = useState<User[]>([])
    const [projectType, setProjectType] = useState<string>('')

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
        const fetchData = async () => {
            try {
                const projects = await fetchProjects()
                setData(
                    projects.map((project: Proiect) => ({
                        createDate: project.createDate,
                        updateDate: project.updateDate,
                        id: project.id.toString(),
                        name: project.name,
                        description: project.description,
                        type: project.type,
                        createdById: project.createdById,
                        status: project.status,
                        checkpoint: project.checkpoint,
                        projectClientId: project.projectClientId,
                        taskCount: project.taskCount,
                        completedTaskCount: project.completedTaskCount,
                        materialCost: project.materialCost,
                        laborCost: project.laborCost,
                        discount: project.discount,
                        discountType: project.discountType,
                        paymentType: project.paymentType,
                        paymentDate: project.paymentDate,
                        vat: project.vat,
                        totalCost: project.totalCost,
                        totalCostDiscounted: project.totalCostDiscounted,
                        discountCalculated: project.discountCalculated,
                        vatCalculated: project.vatCalculated,
                        totalCostWithVat: project.totalCostWithVat,
                        discountedLaborCost: project.discountedLaborCost,
                    })),
                )

                // Find the project with the matching id from the URL
                const matchedProject = projects.find(
                    (project) => project.id.toString() === id.toString(),
                )

                // Check if a matching project is found
                console.log('Matched Project:', matchedProject)

                if (matchedProject) {
                    setSelectedProjectId(matchedProject.id)
                    setProjectName(matchedProject.name || 'N/A')
                    setProjectDescription(matchedProject.description || '')
                    setProjectType(matchedProject.type)
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [id])

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await fetchUsers()
                setUsers(userData)
                console.log('User data', userData)
            } catch (error) {
                console.error('Error fetching user data:', error)
            }
        }

        fetchUserData()
    }, [])

    /*  const handleTypeChange = async (selectedType: string) => {
        try {
            const projectId = parseInt(selectedProjectId, 10)

            if (isNaN(projectId)) {
                throw new Error('Invalid project ID')
            }

            // Update the state first to reflect the change immediately in the UI
            setProjectType(selectedType)

            // Then make the API call to update the project type on the server
            await updateProjectType(projectId, selectedType)
            console.log('Project type updated successfully')
        } catch (error) {
            console.error('Failed to update project type', error)
        }
    } */

    const handleSave = async () => {
        try {
            const projectId = parseInt(selectedProjectId, 10)

            if (isNaN(projectId)) {
                throw new Error('Invalid project ID')
            }

            const updatedProject = {
                name: projectName,
                type: projectType,
                description: projectDescription,
            }

            await updateProject(projectId, updatedProject)
            console.log('Project updated successfully')
        } catch (error) {
            console.error('Failed to update project', error)
        }
    }

    const handleTypeChange = (selectedType: string) => {
        setProjectType(selectedType) // Update type in state but do not call the API yet
    }

    return (
        <div>
            <div className="flex items-center justify-between mt-4">
                <div>
                    <h4>Titlu Proiect</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Titlu proiect"
                        value={projectName} // Bind the state to the input
                        onChange={(e) => setProjectName(e.target.value)} // Track changes to project name
                    />
                </div>
                <div>
                    <h4>Tip Proiect</h4>
                    <Button
                        className="flex justify-center items-center w-[650px] h-[40px] mt-4 mb-4"
                        shape="circle"
                    >
                        <Dropdown
                            className="flex items-center justify-center"
                            title={projectType || 'Tip Proiect'}
                        >
                            <Dropdown.Item
                                eventKey="Masina intreaga"
                                onSelect={() =>
                                    handleTypeChange('Masina intreaga')
                                }
                            >
                                Masina intreaga
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="Motor"
                                onSelect={() => handleTypeChange('Motor')}
                            >
                                Motor
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="Turbina"
                                onSelect={() => handleTypeChange('Turbina')}
                            >
                                Turbina
                            </Dropdown.Item>
                        </Dropdown>
                    </Button>
                </div>
            </div>
            <div>
                <h4 className="mb-4">Informatii proiect</h4>
                <Input
                    textArea
                    className="rounded-xl"
                    placeholder="Text area example"
                    value={projectDescription} // Bind the value to the state
                    onChange={(e) => setProjectDescription(e.target.value)} // Update the state on change
                />
            </div>
            <div className="flex items-center justify-end">
                <Button
                    className="flex justify-center items-center mt-4 w-[300px] h-[40px]"
                    shape="circle"
                    onClick={handleSave} // Call the save function on click
                >
                    Salveaza
                </Button>
            </div>
            <div className="mb-4">
                <h3 className="flex flex-row justify-start">
                    Operatori proiect
                </h3>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
                {users.map((user) => (
                    <Card
                        key={user.id}
                        clickable
                        className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[250px]"
                        onClick={() => console.log(user)}
                    >
                        <div className="flex items-center justify-center">
                            <HiUserCircle className="w-[50px] h-[50px]" />
                        </div>
                        <h5>
                            {user.firstName} {user.lastName} ({user.role})
                        </h5>
                        <div className="flex flex-row gap-2 mt-8">
                            <p>Buline Albe:</p>
                            {[...Array(user.whitePoints)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-4 h-4 bg-white rounded-full border"
                                ></div>
                            ))}
                        </div>
                        <div className="flex flex-row gap-2 mt-6">
                            <p>Buline Negre:</p>
                            {[...Array(user.blackPoints)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-4 h-4 bg-black rounded-full"
                                ></div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default InformatiiProiect
