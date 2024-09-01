import React from 'react'

const MessageInput = () => {
    return (
        <div className="w-full p-4 flex items-center bg-white">
            <input
                type="text"
                className="flex-1 h-12 rounded-full border border-gray-300 px-4"
                placeholder="Type your message..."
            />
            <button className="ml-4 h-12 w-24 bg-blue-500 text-white rounded-full">
                Trimite
            </button>
        </div>
    )
}

export default MessageInput
