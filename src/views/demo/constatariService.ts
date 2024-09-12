import axios from 'axios'

const API_URL = 'http://localhost:8080/api/statements'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjE4MDcsImV4cCI6MTcyNjE0ODIwN30.UTPgdtcCGPptLY-LjqJh6XPdkgBOnYXmnm6xzl1-HHvGNK3px-eavb42QGMS1LDvCKQF7iW6Ugor9F_OUxKz8w',
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
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjE4MDcsImV4cCI6MTcyNjE0ODIwN30.UTPgdtcCGPptLY-LjqJh6XPdkgBOnYXmnm6xzl1-HHvGNK3px-eavb42QGMS1LDvCKQF7iW6Ugor9F_OUxKz8w',
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
