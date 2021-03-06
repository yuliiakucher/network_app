import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a00c48d9-b2a7-4f0f-8d74-162e10d23efd'
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            })
        )
    },

    followUser(userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => {
                        return response.data
                    }
                )
        )
    },
    unfollowUser(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => {
                        return response.data
                    }
                )
        )
    }
}

export const Authentication = ({
    userAuth(){
        return(
            instance.get('auth/me/')
                .then(response => {
                    return response.data
                })
                .catch(error => console.log(error))
        )
    },
    userLogin(email, password, rememberMe=false){
        return(
            instance.post('auth/login', {email, password, rememberMe})
                .then(response => {
                    return response.data
                })
                .catch(error => console.log(error))
        )
    },
    userLogout(){
        return(
            instance.delete('auth/login')
                .then(response => {
                    return response.data
                })
        )
    }
})

export const ProfileApi = ({
    getUserProfile(userId){
        return(
            instance.get(`profile/${userId}`)
                .then(response => {
                    return response.data
                })


        )
    },
    getUserStatus(userId){
        return(
            instance.get(`profile/status/${userId}`)
                .then(response => {
                    return response.data})
        )
    },
    updateUserStatus(status){
        return(
            instance.put(`profile/status/`, { status: status})
                .then(response => response.data)
        )
    }
})





