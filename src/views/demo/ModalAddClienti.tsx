import React, { ChangeEvent, useState } from 'react'
import { Button, Input, Radio } from '../../components/ui'
import ReactModal from 'react-modal'
import { HiUserCircle } from 'react-icons/hi'
import { addClient } from './clientService'

interface ModalAddClientiProps {
    isOpen: boolean
    onClose: () => void
}

const ModalAddClienti: React.FC<ModalAddClientiProps> = ({
    isOpen,
    onClose,
}) => {
    const [formData, setFormData] = useState({
        type: 'COMPANY', // default value
        name: '',
        vat: '',
        email: '',
        phone: '',
        billingAddress: '',
        billingCity: '',
        billingCounty: '',
        billingPostalCode: '',
        shippingAddress: '',
        shippingCity: '',
        shippingCounty: '',
        shippingPostalCode: '',
    })

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        if (isChecked) {
            setFormData((prev) => ({
                ...prev,
                shippingAddress: prev.billingAddress,
                shippingCity: prev.billingCity,
                shippingCounty: prev.billingCounty,
                shippingPostalCode: prev.billingPostalCode,
            }))
        } else {
            setFormData((prev) => ({
                ...prev,
                shippingAddress: '',
                shippingCity: '',
                shippingCounty: '',
                shippingPostalCode: '',
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitting data:', formData)
        try {
            await addClient(formData)
            alert('Client added successfully!')
            onClose() // Close the modal after successful submission
        } catch (error) {
            console.error(
                'Error adding client:',
                error.response ? error.response.data : error.message,
            )
            console.error(
                'Error adding client:',
                error.response ? error.response.data : error.message,
            )
            alert('Failed to add client.')
        }
    }

    return (
        <ReactModal
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: '900px',
                    padding: '20px',
                    borderRadius: '10px',
                    background: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    zIndex: 1001, // Ensure content is above the overlay
                },
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    zIndex: 1000, // Ensure overlay is above other content
                },
            }}
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={onClose}
        >
            <div className="flex">
                {/* Sidebar */}
                <div className="w-1/3 bg-gray-100 p-8">
                    <div className="flex flex-col items-center relative">
                        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                            <HiUserCircle className="text-7xl text-gray-500" />
                        </div>
                        <h3 className="text-xl font-semibold">Account Info</h3>
                        <p className="text-gray-600">
                            Add here the user account info.
                        </p>
                    </div>
                </div>

                {/* Main Form */}
                <div
                    className="w-2/3 p-8 overflow-y-auto"
                    style={{ maxHeight: '80vh' }}
                >
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <h4>Type:</h4>
                            <div className="flex items-center gap-4 mt-2">
                                <Radio
                                    name="type"
                                    value="PERSON"
                                    checked={formData.type === 'PERSON'}
                                    onChange={(e) => handleInputChange(e)}
                                >
                                    Individual
                                </Radio>
                                <Radio
                                    name="type"
                                    value="COMPANY"
                                    checked={formData.type === 'COMPANY'}
                                    onChange={(e) => handleInputChange(e)}
                                >
                                    Company
                                </Radio>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h4>Name / Business name</h4>
                            <Input
                                name="name"
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Nume Prenume / Denumire Societate"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h4>VAT</h4>
                            <Input
                                name="vat"
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="VAT"
                                value={formData.vat}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Email</h4>
                            <Input
                                name="email"
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Phone</h4>
                            <Input
                                name="phone"
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Telefon"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h4 className="mb-2">Billing Address</h4>
                            <Input
                                textArea
                                name="billingAddress"
                                className="rounded-xl"
                                placeholder="Adresa de facturare..."
                                value={formData.billingAddress}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h4>City</h4>
                            <Input
                                name="billingCity"
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Oras"
                                value={formData.billingCity}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h4>County</h4>
                            <Input
                                name="billingCounty"
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Judet"
                                value={formData.billingCounty}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Postal Code</h4>
                            <Input
                                name="billingPostalCode"
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Cod Postal"
                                value={formData.billingPostalCode}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex items-center mt-4">
                            <input
                                type="checkbox"
                                name="sameAddressForShipping"
                                checked={
                                    formData.shippingAddress ===
                                    formData.billingAddress
                                }
                                onChange={(e) => {
                                    const isChecked = e.target.checked
                                    if (isChecked) {
                                        setFormData((prev) => ({
                                            ...prev,
                                            shippingAddress:
                                                prev.billingAddress,
                                            shippingCity: prev.billingCity,
                                            shippingCounty: prev.billingCounty,
                                            shippingPostalCode:
                                                prev.billingPostalCode,
                                        }))
                                    } else {
                                        setFormData((prev) => ({
                                            ...prev,
                                            shippingAddress: '',
                                            shippingCity: '',
                                            shippingCounty: '',
                                            shippingPostalCode: '',
                                        }))
                                    }
                                }}
                            />
                            <h4 className="ml-2">Same address for shipping</h4>
                        </div>

                        <div className="mt-4">
                            <h4 className="mb-2">Shipping Address</h4>
                            <Input
                                textArea
                                name="shippingAddress"
                                className="rounded-xl"
                                placeholder="Adresa de livrare..."
                                value={formData.shippingAddress}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h4>City</h4>
                            <Input
                                name="shippingCity"
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Oras"
                                value={formData.shippingCity}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h4>County</h4>
                            <Input
                                name="shippingCounty"
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Judet"
                                value={formData.shippingCounty}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Postal Code</h4>
                            <Input
                                name="shippingPostalCode"
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Cod Postal"
                                value={formData.shippingPostalCode}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex justify-between space-x-4">
                            <Button
                                style={{
                                    background: '#0188cc',
                                    color: 'white',
                                }}
                                className="bg-blue-600 text-white hover:grey-700 rounded px-4 py-2"
                                type="submit"
                            >
                                Save Customer
                            </Button>
                            <Button
                                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </ReactModal>
    )
}

export default ModalAddClienti
