import React, { ChangeEvent } from 'react'
import { Button, Checkbox, Input, Radio } from '@/components/ui'
import ReactModal from 'react-modal'
import { HiUserCircle } from 'react-icons/hi'

interface ModalAddClientiProps {
    isOpen: boolean
    onClose: () => void
}

const ModalAddClienti: React.FC<ModalAddClientiProps> = ({
    isOpen,
    onClose,
}) => {
    const onCheck = (value: boolean, e: ChangeEvent<HTMLInputElement>) => {
        console.log(value, e)
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
                    <form>
                        <div className="mb-4">
                            <h4>Tip:</h4>
                            <div className="flex items-center gap-4 mt-2">
                                <Radio name="simpleRadioExample">
                                    Persoana fizica
                                </Radio>
                                <Radio defaultChecked name="simpleRadioExample">
                                    Persoana juridica
                                </Radio>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h4>Nume Prenume / Denumire Societate</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Nume Prenume / Denumire Societate"
                            />
                        </div>

                        <div className="mb-4">
                            <h4>VAT</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="VAT"
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Email</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Email"
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Telefon</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Telefon"
                            />
                        </div>

                        <div className="mb-4">
                            <h4 className="mb-2">Adresa de facturare</h4>
                            <Input
                                textArea
                                className="rounded-xl"
                                placeholder="Adresa de facturare..."
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Oras</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Oras"
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Judet</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Judet"
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Cod Postal</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Cod Postal"
                            />
                        </div>

                        <div className="flex items-center mt-4">
                            <Checkbox defaultChecked onChange={onCheck} />
                            <h4 className="ml-2">
                                Aceeasi adresa pentru livrare
                            </h4>
                        </div>

                        <div className="mt-4">
                            <h4 className="mb-2">Adresa de livrare</h4>
                            <Input
                                textArea
                                className="rounded-xl"
                                placeholder="Adresa de livrare..."
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Oras</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Oras"
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Judet</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Judet"
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Cod Postal</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Cod Postal"
                            />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <Button
                                style={{
                                    background: '#0188cc',
                                    color: 'white',
                                }}
                                className="bg-blue-600 text-white hover:grey-700 rounded px-4 py-2"
                                onClick={onClose}
                            >
                                Salvează User
                            </Button>
                            <Button
                                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                                onClick={onClose}
                            >
                                Înapoi
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </ReactModal>
    )
}

export default ModalAddClienti
