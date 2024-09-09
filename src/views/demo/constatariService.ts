import axios from 'axios'

const API_URL = 'http://localhost:8080/api/statements'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU3OTExMDUsImV4cCI6MTcyNTg3NzUwNX0.6snp_tz2EAB7eKokoj-Xknct7SHV1hLY_2TcGRWaCAyA5RoXNMYbZYZfax5hPn2wfrj4shU1RG8sF4OZjCbC_Q',
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
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU3MTM1NzcsImV4cCI6MTcyNTc5OTk3N30.gYhpL5mJCDINJ-rA1lgkJtnKIh1tnpjn-6zizit_-rgbxE1NPAPSR9tOpPGcjD4qiYWlbjAgs8NYgtr3TYcTvQ',
}

// Fetch comments with dynamic ID
export const fetchComments = async (id: number) => {
    try {
        const response = await axios.get(
            API_URL_COMM,
            { headers: AUTH_HEADER_COMM }
        )
        return response.data
    } catch (error) {
        console.error('Error fetching comments:', error)
        throw error
    }
}

