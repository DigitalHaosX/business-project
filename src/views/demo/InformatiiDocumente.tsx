import { Button, Card } from '@/components/ui'
import React from 'react'
import CustomDropdown from './CustomDropdown'

const InformatiiDocumente = () => {
    const dropdownItems = [
        { eventKey: 'a', label: 'Descarca' },
        { eventKey: 'b', label: 'Semneaza' },
        { eventKey: 'c', label: 'Edit' },
        { eventKey: 'd', label: 'Delete' },
    ]
    return (
        <div>
            <div>
                <Button className="mb-4" shape="circle">
                    Document nou +
                </Button>
            </div>
            <div className="flex flex-row justify-between gap-2 ">
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-black">
                                fileName.ext
                            </span>
                            <CustomDropdown items={dropdownItems} />
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-xl font-bold">Proiect: Titlu proiect</p>
                    <p className="text-xl font-bold">Tip Document: Deviz</p>
                    <p className=" text-xl font-bold">Creat De: XYZ</p>
                    <p className=" text-xl font-bold">
                        Creat la data de: 15 Iul 2024
                    </p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-black">
                                fileName.ext
                            </span>
                            <CustomDropdown items={dropdownItems} />
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-xl font-bold">Proiect: Titlu proiect</p>
                    <p className="text-xl font-bold">Tip Document: Deviz</p>
                    <p className=" text-xl font-bold">Creat De: XYZ</p>
                    <p className=" text-xl font-bold">
                        Creat la data de: 15 Iul 2024
                    </p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-black">
                                fileName.ext
                            </span>
                            <CustomDropdown items={dropdownItems} />
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-xl font-bold">Proiect: Titlu proiect</p>
                    <p className="text-xl font-bold">Tip Document: Deviz</p>
                    <p className=" text-xl font-bold">Creat De: XYZ</p>
                    <p className=" text-xl font-bold">
                        Creat la data de: 15 Iul 2024
                    </p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-black">
                                fileName.ext
                            </span>
                            <CustomDropdown items={dropdownItems} />
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-xl font-bold">Proiect: Titlu proiect</p>
                    <p className="text-xl font-bold">Tip Document: Deviz</p>
                    <p className=" text-xl font-bold">Creat De: XYZ</p>
                    <p className=" text-xl font-bold">
                        Creat la data de: 15 Iul 2024
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default InformatiiDocumente
