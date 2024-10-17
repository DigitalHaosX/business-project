import React, { useState } from 'react'
import { Card } from '../../components/ui'
import CustomDropdown from './CustomDropdown'
import Button from '../../components/ui/Button'
import Dropdown from '../../components/ui/Dropdown'
import { Input } from '../../components/ui/Input'

const Documents = () => {
    const [selectedType, setSelectedType] = useState<string | null>(null)
    // const [searchQuery, setSearchQuery] = useState<string>('')

    const dropdownItems = [
        { eventKey: 'a', label: 'Download' },
        { eventKey: 'b', label: 'Sign' },
        { eventKey: 'c', label: 'Edit' },
        { eventKey: 'd', label: 'Delete' },
    ]

    const mockDocuments = [
        {
            fileName: 'Invoice 001',
            documentType: 'Invoice',
            createdBy: 'John Doe',
            createdDate: '2023-09-21',
        },
        {
            fileName: 'Purchase Order 002',
            documentType: 'Purchase O',
            createdBy: 'Jane Smith',
            createdDate: '2023-08-19',
        },
        {
            fileName: 'Contract 003',
            documentType: 'Contract',
            createdBy: 'Mark Johnson',
            createdDate: '2023-07-15',
        },
        {
            fileName: 'Receipt 004',
            documentType: 'Receipt',
            createdBy: 'Emily Brown',
            createdDate: '2023-06-10',
        },
        {
            fileName: 'Quote 005',
            documentType: 'Quote',
            createdBy: 'Michael Scott',
            createdDate: '2023-05-05',
        },
        {
            fileName: 'Report 006',
            documentType: 'Report',
            createdBy: 'Dwight Schrute',
            createdDate: '2023-04-02',
        },
    ]

    const filteredDocuments =
        selectedType && selectedType !== 'All Documents'
            ? mockDocuments.filter(
                  (document) => document.documentType === selectedType,
              )
            : mockDocuments

    // Handler for selecting a document type from dropdown
    const handleDocumentTypeChange = (eventKey: string) => {
        const documentTypeMap: Record<string, string> = {
            a: 'Invoice',
            b: 'Purchase Order',
            c: 'Contract',
            d: 'Receipt',
            e: 'Quote',
            f: 'Report',
            g: 'All Documents',
        }
        setSelectedType(documentTypeMap[eventKey])
    }

    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">Documents</h3>
            </div>
            <div className="flex items-center justify-between ml-3 mr-3">
                <div className="flex items-center ml-auto gap-4">
                    <Input
                        className="w-[240px] h-[40px] rounded-full mb-4"
                        placeholder="Search..."
                    />
                    <Button className="flex items-center mb-4" shape="circle">
                        <Dropdown
                            className=""
                            title="Document Type"
                            onSelect={handleDocumentTypeChange}
                        >
                            <Dropdown.Item eventKey="a">Invoice</Dropdown.Item>
                            <Dropdown.Item eventKey="b">
                                Purchase Order
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="c">Contract</Dropdown.Item>
                            <Dropdown.Item eventKey="d">Receipt</Dropdown.Item>
                            <Dropdown.Item eventKey="e">Quote</Dropdown.Item>
                            <Dropdown.Item eventKey="f">Report</Dropdown.Item>
                            <Dropdown.Item eventKey="g">
                                All Documents
                            </Dropdown.Item>
                        </Dropdown>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredDocuments.map((document, index) => (
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
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-bold">Document Type:</p>
                            <p className="text-xl font-bold">
                                {document.documentType}
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-bold">Created by:</p>
                            <p className="text-xl font-bold">
                                {document.createdBy}
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-bold">Date created:</p>
                            <p className="text-xl font-bold">
                                {document.createdDate}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Documents
