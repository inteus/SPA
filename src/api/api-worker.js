import * as axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        withCredentials: true,
        headers: {
            'API-KEY': '5b5e2cc6-341d-4bb8-844f-87c7b0e650bd'
        }
    }
)

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const followUser = (id) => {
    return instance.post(`/follow/${id}`)
        .then(response => response.data)
}

export const unfollowUser = (id) => {
    return instance.delete(`/follow/${id}`)
        .then(response => response.data)
}

export const authMe = () => {
    return instance.get(`/auth/me`)
}

export const getProfile = (userId) => {
    return instance.get(`/profile/${userId}`)
}

export const getStatus = (userId) => {
    return instance.get(`/profile/status/${userId}`)
}

export const updateStatus = (status) => {
    return instance.put(`/profile/status/`, { status: status })
}