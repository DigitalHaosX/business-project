import React from 'react'

const ChatHeader = () => {
    return (
        <div className="w-full bg-gray-400 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <div className="bg-gray-600 rounded-full h-10 w-10 mr-4"></div>
                <p className="font-bold">Operator #1</p>
            </div>
            <div className="bg-gray-600 rounded-full h-10 w-10 flex items-center justify-center text-white">
                S
            </div>
        </div>
    )
}

export default ChatHeader
