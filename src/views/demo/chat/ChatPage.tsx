import React from 'react'
import ChatSidebar from './ChatSidebar'
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

const ChatPage = () => {
    return (
        <div className="flex h-screen">
            <ChatSidebar />
            <div className="flex flex-col w-3/4">
                <ChatHeader />
                <ChatMessages />
                <ChatInput />
            </div>
        </div>
    )
}

export default ChatPage
