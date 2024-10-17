import { Button, Input } from '@/components/ui'
import React, { useState } from 'react'
import ReactModal from 'react-modal'

interface ModalTasksProps {
    isOpen: boolean
    onClose: () => void
    onSave: (newTask: any) => void // Add a prop for saving the task
}

const ModalTasks: React.FC<ModalTasksProps> = ({ isOpen, onClose, onSave }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [notes, setNotes] = useState('')

    const handleSave = () => {
        const newTask = {
            id: Math.floor(Math.random() * 1000).toString(), // generate a random ID
            name: title,
            description: description || 'N/A',
            status: 'To Do',
            priority: 'Medium',
            notes: notes,
        }

        // Call the parent onSave function with the new task
        onSave(newTask)

        // Reset the form after saving
        setTitle('')
        setDescription('')
        setNotes('')

        onClose()
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
                        zIndex: 1001,
                    },
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        zIndex: 1000,
                    },
                }}
                isOpen={isOpen}
                ariaHideApp={false}
                contentLabel="Add Task Modal"
                onRequestClose={onClose}
            >
                <div style={{ padding: '10px' }}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
                        Add New Task
                    </h2>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 className="mb-4">Task Title</h4>
                        <Input
                            value={title}
                            className="rounded-xl w-full"
                            placeholder="Enter task title..."
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <h4 className="mb-4">Description</h4>
                        <Input
                            textArea
                            value={description}
                            className="rounded-xl w-full"
                            placeholder="Task description..."
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div>
                        <h4 className="mb-4">Notes</h4>
                        <Input
                            textArea
                            value={notes}
                            className="rounded-xl w-full"
                            placeholder="Additional notes..."
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <Button
                            className="flex justify-center items-center hover:text-blue-700 mt-4 w-[300px] h-[40px]"
                            shape="circle"
                            onClick={onClose}
                        >
                            Close
                        </Button>
                        <Button
                            className="flex justify-center items-center hover:text-blue-700 mt-4 w-[300px] h-[40px]"
                            shape="circle"
                            onClick={handleSave} // Trigger save on button click
                        >
                            Save Task
                        </Button>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default ModalTasks
