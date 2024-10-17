import axios from 'axios'

const API_URL = 'http://localhost:8080/api/statements'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYyMjU2NTYsImV4cCI6MTcyNjMxMjA1Nn0.lMY80QViuEYyX6al6P0c-iNNBh1dtwR6cz4M7MtPeL8aJ1zW4reGIQTFusYDbVf8Ywj35daBqcGR-KDuH7V6DA',
}

// Fetch tasks from the API
export const fetchStatements = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: AUTH_HEADER,
        })
        return response.data.content // Adjust based on your API response
    } catch (error) {
        console.error('Error fetching tasks:', error)
        throw error
    }
}

const API_URL_COMM = 'http://localhost:8080/api/statements/${id}/comments'
const AUTH_HEADER_COMM = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYyMjU2NTYsImV4cCI6MTcyNjMxMjA1Nn0.lMY80QViuEYyX6al6P0c-iNNBh1dtwR6cz4M7MtPeL8aJ1zW4reGIQTFusYDbVf8Ywj35daBqcGR-KDuH7V6DA',
}

// Fetch comments with dynamic ID
export const fetchComments = async (id: number) => {
    try {
        const response = await axios.get(API_URL_COMM, {
            headers: AUTH_HEADER_COMM,
        })
        return response.data
    } catch (error) {
        console.error('Error fetching comments:', error)
        throw error
    }
}
