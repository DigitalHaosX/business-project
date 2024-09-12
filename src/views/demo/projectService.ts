import axios from 'axios'

const API_URL = 'http://localhost:8080/api/projects'
const AUTH_HEADER = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjE4MDcsImV4cCI6MTcyNjE0ODIwN30.UTPgdtcCGPptLY-LjqJh6XPdkgBOnYXmnm6xzl1-HHvGNK3px-eavb42QGMS1LDvCKQF7iW6Ugor9F_OUxKz8w',
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

const API_URL_COMM = 'http://localhost:8080/api/projects'
const AUTH_HEADER_COMM = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjE4MDcsImV4cCI6MTcyNjE0ODIwN30.UTPgdtcCGPptLY-LjqJh6XPdkgBOnYXmnm6xzl1-HHvGNK3px-eavb42QGMS1LDvCKQF7iW6Ugor9F_OUxKz8w',
}

export const updateProjectDescription = async (
    projectId: number,
    description: string,
): Promise<void> => {
    try {
        const response = await axios.put(
            `${API_URL_COMM}/${projectId}`,
            { description }, // send only the description
            { headers: AUTH_HEADER_COMM },
        )

        // Log the response and status code for debugging
        console.log('Response from server:', response.data)
        console.log('Response status:', response.status)

        if (response.status !== 200 && response.status !== 204) {
            throw new Error(
                `Failed to update project description: ${response.statusText}`,
            )
        }
    } catch (error) {
        // Improved error logging
        console.error(
            'Error updating project description:',
            error.response?.data || error.message || error,
        )
        throw error
    }
}

export const updateProjectType = async (
    projectId: number,
    type: string,
): Promise<void> => {
    try {
        const response = await axios.put(
            `${API_URL_COMM}/${projectId}`,
            { type }, // Send only the type
            { headers: AUTH_HEADER_COMM },
        )

        // Log the response and status code for debugging
        console.log('Response from server for type:', response.data)
        console.log('Response status:', response.status)

        if (response.status !== 200 && response.status !== 204) {
            throw new Error(
                `Failed to update project type: ${response.statusText}`,
            )
        }
    } catch (error) {
        // Improved error logging
        console.error(
            'Error updating project type:',
            error.response?.data || error.message || error,
        )
        throw error
    }
}

// projectService.js

/* export const updateProject = async (projectId, updatedData) => {
    try {
        const response = await fetch(`/api/projects/${projectId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
        return await response.json()
    } catch (error) {
        throw new Error('Failed to update project')
    }
} */

export const updateProject = async (projectId, updatedData) => {
    try {
        const response = await fetch(
            `http://localhost:8080/api/projects/${projectId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjE4MDcsImV4cCI6MTcyNjE0ODIwN30.UTPgdtcCGPptLY-LjqJh6XPdkgBOnYXmnm6xzl1-HHvGNK3px-eavb42QGMS1LDvCKQF7iW6Ugor9F_OUxKz8w',
                },
                body: JSON.stringify(updatedData),
            },
        )

        // Check if response is successful
        if (!response.ok) {
            throw new Error('Failed to update project')
        }

        return await response.json() // return response if successful
    } catch (error) {
        console.error('Error:', error)
        throw new Error('Failed to update project')
    }
}
