import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'a00c48d9-b2a7-4f0f-8d74-162e10d23efd'
    }

})

export const usersAPI = {
    getUsers (currentPage=1, pageSize=10) {
        return(
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            })
        )
    },

    followUser(userId){
        instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
                }
            )
    },
    unfollowUser(userId){
        instance.delete(`follow/${userId}`)
            .then(response => {
                    return response.data
                }
            )
    }
}




