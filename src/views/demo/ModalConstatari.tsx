import { Button, Input } from '../../components/ui'
import React, { useState } from 'react'
import ReactModal from 'react-modal'

interface ModalConstatariProps {
    isOpen: boolean
    id: string | null // Accept id as a prop
    initialComentarii: string
    onClose: () => void
    onSaveComentarii: (id: string | null, comentarii: string) => void
}

const ModalConstatari: React.FC<ModalConstatariProps> = ({
    isOpen,
    onClose,
    id,
    initialComentarii,
    onSaveComentarii,
}) => {
    const [comentarii, setComentarii] = useState(initialComentarii)

    const handleTrimite = () => {
        onSaveComentarii(id, comentarii) // Pass the updated comment to the parent
        onClose() // Close the modal
    }
    return (
        <div>
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
                contentLabel="Example Modal"
                onRequestClose={onClose}
            >
                <div style={{ padding: '10px' }}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
                        Titlu Sarcina
                    </h2>

                    <div
                        className="grid grid-cols-4 gap-4"
                        style={{ marginBottom: '20px' }}
                    >
                        <div className="flex flex-col gap-2">
                            <h5>ID</h5>
                            <h5>Status</h5>
                            <h5>Proiect</h5>
                            <h5>Tip Proiect</h5>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h5>{id}</h5> {/* Display the passed ID */}
                            <label
                                className=" text-green-700 px-4 py-1 rounded-lg w-[170px]"
                                style={{ backgroundColor: '#d4edda' }}
                            >
                                Trimis catre receptie
                            </label>
                            <h5>12345</h5>
                            <h5>Masina cu motor</h5>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5>Asignat de</h5>
                            <h5>Asignat catre</h5>
                            <h5>Pana la data</h5>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h5>XYZ</h5>
                            <h5>Operator #1</h5>
                            <h5>12 Iul 2024</h5>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4">Descriere</h4>
                        <Input
                            textArea
                            className="rounded-xl w-full"
                            placeholder="Descriere..."
                        />
                    </div>
                    <div>
                        <h4 className="mb-4">Comentarii</h4>
                        <Input
                            textArea
                            className="rounded-xl w-full"
                            placeholder="Comentarii..."
                            value={comentarii}
                            onChange={(e) => setComentarii(e.target.value)} // Update the state on change
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            style={{ backgroundColor: '#d4edda' }}
                            className="flex justify-center items-center hover:text-blue-700 mt-4 w-[300px] h-[40px]"
                            shape="circle"
                            onClick={handleTrimite} // Call handleTrimite when clicked
                        >
                            Trimite
                        </Button>
                    </div>

                    <div className="flex items-center justify-between">
                        <Button
                            className="flex justify-center items-center hover:text-blue-700 mt-4 w-[300px] h-[40px]"
                            shape="circle"
                            onClick={onClose}
                        >
                            Inchide
                        </Button>
                        <Button
                            className="flex justify-center items-center hover:text-blue-700 mt-4 w-[300px] h-[40px]"
                            shape="circle"
                        >
                            Salveaza
                        </Button>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default ModalConstatari
