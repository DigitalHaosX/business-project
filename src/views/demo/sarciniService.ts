import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api/tasks/statistics'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYyMjU2NTYsImV4cCI6MTcyNjMxMjA1Nn0.lMY80QViuEYyX6al6P0c-iNNBh1dtwR6cz4M7MtPeL8aJ1zW4reGIQTFusYDbVf8Ywj35daBqcGR-KDuH7V6DA',
}

// Fetch total tasks from the dashboard statistics
export const fetchTotalTasks = async (): Promise<number> => {
    try {
        const response = await axios.get(API_BASE_URL, { headers: AUTH_HEADER })
        return response.data.total
    } catch (error) {
        console.error('Error fetching total tasks:', error)
        throw error
    }
}

export const fetchToDoTasks = async (): Promise<number> => {
    try {
        const response = await axios.get(API_BASE_URL, { headers: AUTH_HEADER })
        return response.data.todo
    } catch (error) {
        console.error('Error fetching todo tasks:', error)
        throw error
    }
}

export const fetchInProgress = async (): Promise<number> => {
    try {
        const response = await axios.get(API_BASE_URL, { headers: AUTH_HEADER })
        return response.data.inProgress
    } catch (error) {
        console.error('Error fetching todo tasks:', error)
        throw error
    }
}

export const fetchDone = async (): Promise<number> => {
    try {
        const response = await axios.get(API_BASE_URL, { headers: AUTH_HEADER })
        return response.data.done
    } catch (error) {
        console.error('Error fetching todo tasks:', error)
        throw error
    }
}

const API_URL_TASKS = 'http://localhost:8080/api/tasks'
const AUTH_HEADER_TASKS = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYyMjU2NTYsImV4cCI6MTcyNjMxMjA1Nn0.lMY80QViuEYyX6al6P0c-iNNBh1dtwR6cz4M7MtPeL8aJ1zW4reGIQTFusYDbVf8Ywj35daBqcGR-KDuH7V6DA',
}

// Fetch tasks from the API
export const fetchTasks = async () => {
    try {
        const response = await axios.get(API_URL_TASKS, {
            headers: AUTH_HEADER_TASKS,
        })
        return response.data.content // Adjust based on your API response
    } catch (error) {
        console.error('Error fetching tasks:', error)
        throw error
    }
}
