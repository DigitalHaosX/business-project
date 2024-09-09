import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api/tasks/statistics'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU3OTExMDUsImV4cCI6MTcyNTg3NzUwNX0.6snp_tz2EAB7eKokoj-Xknct7SHV1hLY_2TcGRWaCAyA5RoXNMYbZYZfax5hPn2wfrj4shU1RG8sF4OZjCbC_Q',
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
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU3OTExMDUsImV4cCI6MTcyNTg3NzUwNX0.6snp_tz2EAB7eKokoj-Xknct7SHV1hLY_2TcGRWaCAyA5RoXNMYbZYZfax5hPn2wfrj4shU1RG8sF4OZjCbC_Q',
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
