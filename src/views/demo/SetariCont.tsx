import React from 'react'
import { HiUserCircle } from 'react-icons/hi'
import Button from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Dropdown } from '@/components/ui'

const SetariCont = () => {
    return (
        <div
            className="mt-4"
            style={{
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '16px',
                background: '#d9d9d9',
            }}
        >
            <div className="flex items-center">
                <HiUserCircle className="hover:shadow-lg transition duration-150 ease-in-out w-[100px] h-[100px]" />

                <div className="flex flex-col">
                    <p>Imagine profil</p>
                    <p>PNG, JPEG, sub 15 MB</p>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <Button shape="circle">Incarca imagine</Button>
                    <Button shape="circle">Delete</Button>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Nume Prenume</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Nume Prenume"
                    />
                </div>
                <div>
                    <h4>Email</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div className="rounded-full mb-4">
                <Button
                    className="flex justify-center items-center w-[650px] h-[40px]"
                    shape="circle"
                >
                    <Dropdown
                        className="flex items-center justify-center"
                        title="Limba platforma"
                    >
                        <Dropdown.Item eventKey="a">Romana</Dropdown.Item>
                        <Dropdown.Item eventKey="b">Engleza</Dropdown.Item>
                    </Dropdown>
                </Button>
            </div>
            <div className="mt-4">
                <h4>Parola</h4>
                <p>Modifica parola curenta</p>
            </div>
            <div className="flex items-center justify-between gap-4 mt-4">
                <div>
                    <h4>Parola curenta</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4"
                        placeholder="Parola curenta"
                    />
                </div>
                <div>
                    <h4>Parola noua</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4"
                        placeholder="Parola noua"
                    />
                </div>
            </div>
            <div className="flex items-center justify-end">
                <Button
                    className="flex justify-center items-center w-[650px] h-[40px]"
                    shape="circle"
                >
                    Salveaza
                </Button>
            </div>
        </div>
    )
}

export default SetariCont
