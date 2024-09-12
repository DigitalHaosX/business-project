import axios from 'axios'

const API_URL = 'http://localhost:8080/api/clients'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYxNDgyOTcsImV4cCI6MTcyNjIzNDY5N30.YSrZtkh1L7BRuTIX1Uvct_DzvPgRI5qUzqxCtfR8YsgI4wfqFee1jlYM6Q_QaERHMR57DYybVaRKKXsOfe3RoQ',
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

export const updateClient = async (clientId, updatedClient) => {
    try {
        const response = await fetch(
            `http://localhost:8080/api/clients/${clientId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYxNDgyOTcsImV4cCI6MTcyNjIzNDY5N30.YSrZtkh1L7BRuTIX1Uvct_DzvPgRI5qUzqxCtfR8YsgI4wfqFee1jlYM6Q_QaERHMR57DYybVaRKKXsOfe3RoQ',
                },
                body: JSON.stringify(updatedClient),
            },
        )

        // Check if response is successful
        if (!response.ok) {
            throw new Error('Failed to update client')
        }

        return await response.json() // return response if successful
    } catch (error) {
        console.error('Error:', error)
        throw new Error('Failed to update client')
    }
}
