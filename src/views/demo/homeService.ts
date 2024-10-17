import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api/dashboard/statistics'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYyMjU2NTYsImV4cCI6MTcyNjMxMjA1Nn0.lMY80QViuEYyX6al6P0c-iNNBh1dtwR6cz4M7MtPeL8aJ1zW4reGIQTFusYDbVf8Ywj35daBqcGR-KDuH7V6DA',
}

// Fetch total users from the dashboard statistics
export const fetchTotalUsers = async (): Promise<number> => {
    try {
        const response = await axios.get(API_BASE_URL, { headers: AUTH_HEADER })
        return response.data.totalUsers
    } catch (error) {
        console.error('Error fetching total users:', error)
        throw error
    }
}

// Fetch total expanses from the dashboard statistics
export const fetchTotalExpenses = async (): Promise<number> => {
    try {
        const response = await axios.get(API_BASE_URL, { headers: AUTH_HEADER })
        return response.data.totalExpenses
    } catch (error) {
        console.error('Error fetching total expenses:', error)
        throw error
    }
}

// Fetch total incomes from the dashboard statistics
export const fetchTotalIncomes = async (): Promise<number> => {
    try {
        const response = await axios.get(API_BASE_URL, { headers: AUTH_HEADER })
        return response.data.totalIncomes
    } catch (error) {
        console.error('Error fetching total incomes:', error)
        throw error
    }
}

const API_URL_PROJECTS = 'http://localhost:8080/api/projects'
const AUTH_HEADER_PROJECTS = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYyMjU2NTYsImV4cCI6MTcyNjMxMjA1Nn0.lMY80QViuEYyX6al6P0c-iNNBh1dtwR6cz4M7MtPeL8aJ1zW4reGIQTFusYDbVf8Ywj35daBqcGR-KDuH7V6DA',
}

// Fetch total projects statistics
export const fetchTotalProjects = async () => {
    const response = await axios.get(`${API_URL_PROJECTS}/statistics`, {
        headers: AUTH_HEADER_PROJECTS,
    })
    return response.data.total // Adjust this based on your API structure
}

const API_URL_USERS = 'http://localhost:8080/api/users'
const AUTH_HEADER_USERS = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYyMjU2NTYsImV4cCI6MTcyNjMxMjA1Nn0.lMY80QViuEYyX6al6P0c-iNNBh1dtwR6cz4M7MtPeL8aJ1zW4reGIQTFusYDbVf8Ywj35daBqcGR-KDuH7V6DA',
}

export const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get(API_URL_USERS, {
        headers: AUTH_HEADER_USERS,
    })
    return response.data.content
}
