import React from 'react'
import { HiUserCircle } from 'react-icons/hi'
import Button from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Dropdown } from '@/components/ui'

const AccountSettings = () => {
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
                    <p>Image</p>
                    <p>PNG, JPEG, sub 15 MB</p>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <Button shape="circle">Upload Image</Button>
                    <Button shape="circle">Delete</Button>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Firstname Lastname</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Firstname Lastname"
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
                        title="Language"
                    >
                        <Dropdown.Item eventKey="a">Romanian</Dropdown.Item>
                        <Dropdown.Item eventKey="b">English</Dropdown.Item>
                    </Dropdown>
                </Button>
            </div>
            <div className="mt-4">
                <h4>Password</h4>
                <p>Change Password</p>
            </div>
            <div className="flex items-center justify-between gap-4 mt-4">
                <div>
                    <h4>Current Password</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4"
                        placeholder="Current Password"
                    />
                </div>
                <div>
                    <h4>New Password</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4"
                        placeholder="New Password"
                    />
                </div>
            </div>
            <div className="flex items-center justify-end">
                <Button
                    className="flex justify-center items-center w-[650px] h-[40px]"
                    shape="circle"
                >
                    Save
                </Button>
            </div>
        </div>
    )
}

export default AccountSettings
