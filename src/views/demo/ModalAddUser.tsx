import React from 'react'
import { Button, Dropdown, Input } from '@/components/ui'
import ReactModal from 'react-modal'
import { HiUserCircle } from 'react-icons/hi'

interface ModalAddUserProps {
    isOpen: boolean
    onClose: () => void
}

const ModalAddUser: React.FC<ModalAddUserProps> = ({ isOpen, onClose }) => {
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
                <div className="w-2/3 p-8">
                    <form>
                        <div className="grid grid-cols-1 gap-4 mb-6">
                            <div>
                                <label className="block text-gray-700">
                                    Email
                                </label>
                                <Input
                                    readOnly
                                    className="w-full"
                                    defaultValue="developer@core-software.ro"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    First Name
                                </label>
                                <Input
                                    className="w-full"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    Last Name
                                </label>
                                <Input
                                    className="w-full"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    Password
                                </label>
                                <Input
                                    className="w-full"
                                    type="password"
                                    defaultValue="********"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    Password Confirm
                                </label>
                                <Input
                                    className="w-full"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    Manage Role
                                </label>
                                <Button className="flex items-center rounded mb-4 w-full ">
                                    <Dropdown title="Select Role">
                                        <Dropdown.Item eventKey="a">
                                            Admin
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="b">
                                            User
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="c">
                                            Manager
                                        </Dropdown.Item>
                                    </Dropdown>
                                </Button>
                            </div>
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

export default ModalAddUser
