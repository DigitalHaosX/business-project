import React from 'react'

const messages = [
    { text: 'Message sent and read', time: '17:30', read: true },
    { text: 'Message sent', time: '17:43', read: false },
]

const ChatMessages = () => {
    return (
        <div className="flex-1 bg-gray-100 p-4">
            {messages.map((message, index) => (
                <div key={index} className="flex justify-end mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p>{message.text}</p>
                        <div className="text-right text-xs text-gray-500 flex items-center">
                            {message.time}
                            {message.read && <span className="ml-2">✔✔</span>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatMessages
