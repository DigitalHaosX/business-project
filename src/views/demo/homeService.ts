import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api/dashboard/statistics'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjE4MDcsImV4cCI6MTcyNjE0ODIwN30.UTPgdtcCGPptLY-LjqJh6XPdkgBOnYXmnm6xzl1-HHvGNK3px-eavb42QGMS1LDvCKQF7iW6Ugor9F_OUxKz8w',
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
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjE4MDcsImV4cCI6MTcyNjE0ODIwN30.UTPgdtcCGPptLY-LjqJh6XPdkgBOnYXmnm6xzl1-HHvGNK3px-eavb42QGMS1LDvCKQF7iW6Ugor9F_OUxKz8w',
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
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjE4MDcsImV4cCI6MTcyNjE0ODIwN30.UTPgdtcCGPptLY-LjqJh6XPdkgBOnYXmnm6xzl1-HHvGNK3px-eavb42QGMS1LDvCKQF7iW6Ugor9F_OUxKz8w',
}

export const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get(API_URL_USERS, {
        headers: AUTH_HEADER_USERS,
    })
    return response.data.content
}
