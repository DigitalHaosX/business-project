import { Button, DatePicker, Dropdown, Input } from '@/components/ui'
import React from 'react'

const InformatiiFinanciare = () => {
    return (
        <div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Cost Materiale</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Introduceti costul total..."
                    />
                </div>
                <div>
                    <h4>Metoda de plata</h4>

                    <Button
                        className="flex justify-center items-center w-[650px] h-[40px] mt-4 mb-4"
                        shape="circle"
                    >
                        <Dropdown
                            className="flex items-center justify-center"
                            title="Metoda de plata"
                        >
                            <Dropdown.Item eventKey="a">Cash</Dropdown.Item>
                            <Dropdown.Item eventKey="b">Card</Dropdown.Item>
                            <Dropdown.Item eventKey="c">
                                Transfer bancar
                            </Dropdown.Item>
                        </Dropdown>
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div className="relative w-[650px] mb-4 mt-4">
                    <h4>Cost Manopera</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Introduceti costul total..."
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 mt-4">
                        RON
                    </span>
                </div>

                <div>
                    <h4>Data platii</h4>
                    <DatePicker /* No rounded support */
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Alege data"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div className="relative w-[650px] mt-4">
                    <h4>Discount</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Discount..."
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 mt-4">
                        RON/%
                    </span>
                </div>
                <div className="relative mt-4">
                    <h4>TVA</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="TVA..."
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 mt-4">
                        %
                    </span>
                </div>
            </div>
            <div
                className="mt-4"
                style={{
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '16px',
                    background: '#d9d9d9',
                }}
            >
                <div className="flex items-center justify-between ">
                    <h5>Cost Total:</h5>
                    <span>XXXX RON</span>
                </div>
                <div className="flex items-center justify-between ">
                    <h5>Discount X%:</h5>
                    <span>XXXX RON</span>
                </div>
                <div className="flex items-center justify-between ">
                    <h5>TVA XX%:</h5>
                    <span>XXXX RON</span>
                </div>
                <div className="flex items-center justify-between ">
                    <h5>Total de plata:</h5>
                    <span>XXXX RON</span>
                </div>
            </div>
            <div className="flex items-center justify-end mt-4">
                <Button
                    className="flex justify-center items-center w-[250px] h-[40px]"
                    shape="circle"
                >
                    Salveaza
                </Button>
            </div>
        </div>
    )
}

export default InformatiiFinanciare
