import React from 'react'
import { Card } from '@/components/ui'
import CustomDropdown from './CustomDropdown'
import Button from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const SabloaneSarcini = () => {
    const dropdownItems = [
        { eventKey: 'a', label: 'Edit' },
        { eventKey: 'b', label: 'Delete' },
    ]
    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">Sarcini</h3>
            </div>
            <div className="flex items-center justify-between">
                <Button className="mb-4" shape="circle">
                    Sablon nou +
                </Button>
            </div>
            <div className="flex flex-row justify-start gap-2 ">
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
            </div>
        </div>
    )
}

export default SabloaneSarcini
