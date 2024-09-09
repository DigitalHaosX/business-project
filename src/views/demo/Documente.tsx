import React, { useEffect, useState } from 'react'
import { Card } from '../../components/ui'
import CustomDropdown from './CustomDropdown'
import Button from '../../components/ui/Button'
import Dropdown from '../../components/ui/Dropdown'
import { Input } from '../../components/ui/Input'
import { fetchProjects } from './projectService'

interface Document {
    fileName: string
    documentType: string
    createdDate: string
    createdBy: number
}

const Documente = () => {
    const [documents, setDocuments] = useState<Document[]>([])

    const dropdownItems = [
        { eventKey: 'a', label: 'Descarca' },
        { eventKey: 'b', label: 'Semneaza' },
        { eventKey: 'c', label: 'Edit' },
        { eventKey: 'd', label: 'Delete' },
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await fetchProjects()
                const formattedData = projects.map((project: any) => ({
                    fileName: project.name || 'No Name',
                    documentType: project.type || 'N/A',
                    createdDate: project.createDate || 'N/A',
                    createdBy: project.createdById || 0,
                }))
                setDocuments(formattedData)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">Documente</h3>
            </div>
            <div className="flex items-center justify-between ml-3 mr-3">
                <Button className="mb-4" shape="circle">
                    Proiect nou +
                </Button>
                <div className="flex items-center ml-auto gap-4">
                    <Input
                        className="w-[240px] h-[40px] rounded-full mb-4"
                        placeholder="Cauta..."
                    />
                    <Button className="flex items-center mb-4" shape="circle">
                        <Dropdown className="" title="Tip document">
                            <Dropdown.Item eventKey="a">Tip 1</Dropdown.Item>
                            <Dropdown.Item eventKey="b">Tip 2</Dropdown.Item>
                            <Dropdown.Item eventKey="c">Tip 3</Dropdown.Item>
                            <Dropdown.Item eventKey="d">Tip 4</Dropdown.Item>
                        </Dropdown>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {documents.map((document, index) => (
                    <Card
                        key={index}
                        header={
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-black">
                                    {document.fileName || 'No Name'}
                                </span>
                                <CustomDropdown items={dropdownItems} />
                            </div>
                        }
                        clickable={true}
                        className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-full h-[220px]"
                        onClick={(e) => console.log('Card Clickable', e)}
                    >
                        <p className="text-xl font-bold">
                            Tip Document: {document.documentType || 'Deviz'}
                        </p>
                        <p className="text-xl font-bold">
                            Creat De: {document.createdBy || 'XYZ'}
                        </p>
                        <p className="text-xl font-bold">
                            Creat la data de: {document.createdDate || 'N/A'}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Documente
