import React, { ChangeEvent } from 'react'
import { Button, Checkbox, Input, Upload } from '@/components/ui'
import ReactModal from 'react-modal'
import { HiOutlineCloudUpload, HiPlusCircle } from 'react-icons/hi'
import { FcImageFile } from 'react-icons/fc'

interface ModalSabloaneDocumenteProps {
    isOpen: boolean
    onClose: () => void
}

const ModalSabloaneDocumente: React.FC<ModalSabloaneDocumenteProps> = ({
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
            <div className="flex overflow-y-auto justify-center">
                {/* Main Form */}
                <div className="p-8 " style={{ maxHeight: '80vh' }}>
                    <form>
                        <div className="mb-4">
                            <h4>Denumire</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Denumire"
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Status</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Status"
                            />
                        </div>

                        <div className="mb-4">
                            <h4>Tip proiect</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Tip proiect"
                            />
                        </div>
                        <div className="mb-4">
                            <div className="mb-4">
                                <Upload>
                                    <Button
                                        variant="solid"
                                        icon={<HiOutlineCloudUpload />}
                                    >
                                        Upload your file
                                    </Button>
                                </Upload>
                            </div>
                            <div>
                                <Upload draggable>
                                    <div className="my-16 text-center">
                                        <div className="text-6xl mb-4 flex justify-center">
                                            <FcImageFile />
                                        </div>
                                        <p className="font-semibold">
                                            <span className="text-gray-800 dark:text-white">
                                                Drop your image here, or{' '}
                                            </span>
                                            <span className="text-blue-500">
                                                browse
                                            </span>
                                        </p>
                                        <p className="mt-1 opacity-60 dark:text-white">
                                            Support: jpeg, png, gif
                                        </p>
                                    </div>
                                </Upload>
                            </div>
                        </div>

                        <div className="flex items-center mt-4">
                            <Checkbox defaultChecked onChange={onCheck} />
                            <h4 className="ml-2">
                                Documentul contine variabile
                            </h4>
                        </div>
                        <div className="mb-4 mt-4">
                            <h4>Sintaxa #1</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Sintaxa #1"
                            />
                        </div>
                        <div className="mb-4">
                            <h4>Eticheta #1</h4>
                            <Input
                                className="w-full h-[40px] rounded-full mt-2"
                                placeholder="Eticheta #1"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Button
                                style={{
                                    border: 'none',
                                    background: '#f8f9fa',
                                }}
                                className="flex justify-center items-center hover:text-blue-700 mt-4 w-[200px] h-[40px]"
                                shape="circle"
                            >
                                <HiPlusCircle className="w-[40px] h-[40px]" />{' '}
                                Adauga variabila
                            </Button>
                        </div>
                        <div className="flex items-center mt-4">
                            <Checkbox defaultChecked onChange={onCheck} />
                            <h4 className="ml-2">
                                Documentul necesita semnatura clientului
                            </h4>
                        </div>

                        <div className="flex justify-between space-x-4 mt-4">
                            <Button
                                style={{
                                    background: '#0188cc',
                                    color: 'white',
                                }}
                                className="bg-blue-600 text-white hover:grey-700 rounded px-4 py-2"
                                onClick={onClose}
                            >
                                Genereaza
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

export default ModalSabloaneDocumente
