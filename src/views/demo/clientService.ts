import axios from 'axios'

const API_URL = 'http://localhost:8080/api/clients'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjE4MDcsImV4cCI6MTcyNjE0ODIwN30.UTPgdtcCGPptLY-LjqJh6XPdkgBOnYXmnm6xzl1-HHvGNK3px-eavb42QGMS1LDvCKQF7iW6Ugor9F_OUxKz8w',
}

// Fetch all clients
export const fetchClients = async () => {
    const response = await axios.get(`${API_URL}`, { headers: AUTH_HEADER })
    return response.data.content // Adjust this based on your API structure
}

// Add a new client
export const addClient = async (clientData) => {
    try {
        const response = await axios.post(API_URL, clientData, {
            headers: AUTH_HEADER,
        })
        return response.data
    } catch (error) {
        console.error(
            'Error adding client:',
            error.response ? error.response.data : error.message,
        )
        throw error
    }
}
