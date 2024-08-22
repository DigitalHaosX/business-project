import React from 'react'
import { Card } from '@/components/ui'
import CustomDropdown from './CustomDropdown'
import Button from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const SabloaneDocumente = () => {
    const dropdownItems = [
        { eventKey: 'a', label: 'Descarca' },
        { eventKey: 'b', label: 'Incarca document nou' },
        { eventKey: 'd', label: 'Delete' },
    ]
    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">Documente</h3>
            </div>
            <div className="flex items-center justify-between">
                <Button className="mb-4" shape="circle">
                    Sablon nou +
                </Button>
                <div className="flex items-center ml-auto gap-4">
                    <Input
                        className="w-[240px] h-[40px] rounded-full mb-4"
                        placeholder="Cauta..."
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between gap-2 ">
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-black">
                                Deviz
                            </span>
                            <CustomDropdown items={dropdownItems} />
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-xl font-bold">Status: Draft</p>
                    <p className="text-xl font-bold">Creat de: XYZ</p>
                    <p className=" text-xl font-bold">
                        Creat la data: 15 Iul 2024
                    </p>
                    <p className=" text-xl font-bold">
                        Creat la data de: 15 Iul 2024
                    </p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-black">
                                Factura
                            </span>
                            <CustomDropdown items={dropdownItems} />
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-xl font-bold">Status: Publicat</p>
                    <p className="text-xl font-bold">Creat de: XYZ</p>
                    <p className=" text-xl font-bold">
                        Creat la data: 15 Iul 2024
                    </p>
                    <p className=" text-xl font-bold">
                        Creat la data de: 15 Iul 2024
                    </p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-black">
                                Extern
                            </span>
                            <CustomDropdown items={dropdownItems} />
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-xl font-bold">Status: Publicat</p>
                    <p className="text-xl font-bold">Creat de: XYZ</p>
                    <p className=" text-xl font-bold">
                        Creat la data: 15 Iul 2024
                    </p>
                    <p className=" text-xl font-bold">
                        Creat la data de: 15 Iul 2024
                    </p>
                </Card>
                <Card
                    header={
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-black">
                                Extra
                            </span>
                            <CustomDropdown items={dropdownItems} />
                        </div>
                    }
                    clickable={true}
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[330px] h-[220px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <p className=" text-xl font-bold">Status: Publicat</p>
                    <p className="text-xl font-bold">Creat de: XYZ</p>
                    <p className=" text-xl font-bold">
                        Creat la data: 15 Iul 2024
                    </p>
                    <p className=" text-xl font-bold">
                        Creat la data de: 15 Iul 2024
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default SabloaneDocumente
