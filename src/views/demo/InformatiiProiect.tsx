import React from 'react'
import { Button, Card, Dropdown, Input } from '@/components/ui'
import { HiMinusCircle, HiPlusCircle, HiUserCircle } from 'react-icons/hi'

const InformatiiProiect = () => {
    return (
        <div>
            <div className="flex items-center justify-between mt-4">
                <div>
                    <h4>Titlu Proiect</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Titlu proiect"
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
                            title="Tip Proiect"
                        >
                            <Dropdown.Item eventKey="a">
                                Masina intreaga
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="b">Motor</Dropdown.Item>
                            <Dropdown.Item eventKey="c">Turbina</Dropdown.Item>
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
                />
            </div>
            <div className="flex items-center justify-end">
                <Button
                    className="flex justify-center items-center mt-4 w-[300px] h-[40px]"
                    shape="circle"
                >
                    Salveaza
                </Button>
            </div>
            <div className="mb-4">
                <h3 className="flex flex-row justify-start">
                    Operatori proiect
                </h3>
            </div>
            <div className="flex flex-row justify-between">
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[150px] h-[180px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[70px] h-[70px]" />
                    </div>
                    <h4 className="flex items-center justify-center">
                        Operator
                    </h4>
                    <div className="flex flex-row justify-between mt-4">
                        <HiPlusCircle className="w-[30px] h-[30px]" />
                        <HiMinusCircle className="w-[30px] h-[30px]" />
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[150px] h-[180px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[70px] h-[70px]" />
                    </div>
                    <h4 className="flex items-center justify-center">
                        Operator
                    </h4>
                    <div className="flex flex-row justify-between mt-4">
                        <HiPlusCircle className="w-[30px] h-[30px]" />
                        <HiMinusCircle className="w-[30px] h-[30px]" />
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[150px] h-[180px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[70px] h-[70px]" />
                    </div>
                    <h4 className="flex items-center justify-center">
                        Operator
                    </h4>
                    <div className="flex flex-row justify-between mt-4">
                        <HiPlusCircle className="w-[30px] h-[30px]" />
                        <HiMinusCircle className="w-[30px] h-[30px]" />
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[150px] h-[180px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[70px] h-[70px]" />
                    </div>
                    <h4 className="flex items-center justify-center">
                        Operator
                    </h4>
                    <div className="flex flex-row justify-between mt-4">
                        <HiPlusCircle className="w-[30px] h-[30px]" />
                        <HiMinusCircle className="w-[30px] h-[30px]" />
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[150px] h-[180px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[70px] h-[70px]" />
                    </div>
                    <h4 className="flex items-center justify-center">
                        Operator
                    </h4>
                    <div className="flex flex-row justify-between mt-4">
                        <HiPlusCircle className="w-[30px] h-[30px]" />
                        <HiMinusCircle className="w-[30px] h-[30px]" />
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[150px] h-[180px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[70px] h-[70px]" />
                    </div>
                    <h4 className="flex items-center justify-center">
                        Operator
                    </h4>
                    <div className="flex flex-row justify-between mt-4">
                        <HiPlusCircle className="w-[30px] h-[30px]" />
                        <HiMinusCircle className="w-[30px] h-[30px]" />
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[150px] h-[180px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[70px] h-[70px]" />
                    </div>
                    <h4 className="flex items-center justify-center">
                        Operator
                    </h4>
                    <div className="flex flex-row justify-between mt-4">
                        <HiPlusCircle className="w-[30px] h-[30px]" />
                        <HiMinusCircle className="w-[30px] h-[30px]" />
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[150px] h-[180px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[70px] h-[70px]" />
                    </div>
                    <h4 className="flex items-center justify-center">
                        Operator
                    </h4>
                    <div className="flex flex-row justify-between mt-4">
                        <HiPlusCircle className="w-[30px] h-[30px]" />
                        <HiMinusCircle className="w-[30px] h-[30px]" />
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default InformatiiProiect
