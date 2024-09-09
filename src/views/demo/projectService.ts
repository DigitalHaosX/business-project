import axios from 'axios'

const API_URL = 'http://localhost:8080/api/projects'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU3OTExMDUsImV4cCI6MTcyNTg3NzUwNX0.6snp_tz2EAB7eKokoj-Xknct7SHV1hLY_2TcGRWaCAyA5RoXNMYbZYZfax5hPn2wfrj4shU1RG8sF4OZjCbC_Q',
}

// Fetch all projects
export const fetchProjects = async () => {
    const response = await axios.get(`${API_URL}`, { headers: AUTH_HEADER })
    return response.data.content // Adjust this based on your API structure
}

// Fetch total projects statistics
export const fetchTotalProjects = async () => {
    const response = await axios.get(`${API_URL}/statistics`, {
        headers: AUTH_HEADER,
    })
    return response.data.total // Adjust this based on your API structure
}

// Fetch new projects statistics
export const fetchNewProjects = async () => {
    const response = await axios.get(`${API_URL}/statistics`, {
        headers: AUTH_HEADER,
    })
    return response.data.newProjects // Adjust this based on your API structure
}

// Fetch projects in progress statistics
export const fetchProgressProjects = async () => {
    const response = await axios.get(`${API_URL}/statistics`, {
        headers: AUTH_HEADER,
    })
    return response.data.approved // Adjust this based on your API structure
}

// Fetch finished projects statistics
export const fetchFinishedProjects = async () => {
    const response = await axios.get(`${API_URL}/statistics`, {
        headers: AUTH_HEADER,
    })
    return response.data.complete // Adjust this based on your API structure
}


