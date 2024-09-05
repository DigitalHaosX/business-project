// src/services/ProjectService.ts

import ApiService from '../../services/ApiService'
import { AxiosRequestConfig } from 'axios'

type ProjectStatisticsResponse = {
    total: number
    newProjects: number
    approved: number
    declined: number
    complete: number
}

type ProjectStatisticsRequest = {}

const getAuthToken = () => {
    return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWkucGFkdXJhcnUwNUBnbWFpbC5jb20iLCJpYXQiOjE3MjU1MzYxOTMsImV4cCI6MTcyNTYyMjU5M30.UpppikotyHefbAzq8bKE1omxNuOiAnf7n-ksD3Q9X5ISZDzwGfxwicD0L9wYTPTjI34NwQ7vS1o84bqUycIDkg'
}

export async function fetchProjectStatistics() {
    const token = getAuthToken()
    const config: AxiosRequestConfig = {
        url: '/api/projects/statistics',
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    try {
        const response = await ApiService.fetchData<
            ProjectStatisticsResponse,
            ProjectStatisticsRequest
        >(config)
        console.log('API Response:', response.data) // Log response data
        return response
    } catch (error) {
        console.error('API Error:', error) // Log error
        throw error // Re-throw the error to handle it in the component
    }
}
