import React from 'react'

const contacts = [
    {
        name: 'Operator #1',
        lastMessage: 'lastMessage',
        time: '17:30',
        unreadCount: 2,
    },
    {
        name: 'Piesar',
        lastMessage: 'lastMessage',
        time: '17:30',
        unreadCount: 0,
    },
    {
        name: 'Operator #1',
        lastMessage: 'lastMessage',
        time: '05.10.2024',
        unreadCount: 0,
    },
    {
        name: 'Operator #1',
        lastMessage: 'lastMessage',
        time: '17:30',
        unreadCount: 0,
    },
]

const Sidebar = () => {
    return (
        <div className="w-1/4 bg-gray-200 p-4">
            <div className="relative mb-4">
                <input
                    type="text"
                    className="w-full rounded-full px-4 py-2"
                    placeholder="Search..."
                />
                <div className="absolute right-2 top-2">
                    <span className="bg-gray-400 rounded-full p-2 text-white">
                        S
                    </span>
                </div>
            </div>
            <ul>
                {contacts.map((contact, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center mb-4 p-2 rounded-lg hover:bg-gray-300"
                    >
                        <div className="flex items-center">
                            <div className="bg-gray-400 rounded-full h-12 w-12 mr-4"></div>
                            <div>
                                <p className="font-bold">{contact.name}</p>
                                <p className="text-sm text-gray-600">
                                    {contact.lastMessage}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">
                                {contact.time}
                            </p>
                            {contact.unreadCount > 0 && (
                                <span className="bg-red-500 text-white rounded-full px-2 text-xs">
                                    {contact.unreadCount}
                                </span>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
