import { api } from "./api";

export const getUsers = async () => {
    try {
        const { data: response } = await api.get('/users')
    
        return response;
    } catch (err) {
        throw new Error(err);
    }
};

export const createUser = async (user) => {
    console.log(user)

    try {
        const {data: response} = await api.post('/users', user)
        
        return {
            success: true,
            response
        };
    } catch (err) {
        return{
            success: false,
            message: err.message
        }        
    }
}

export const deleteUsers = async (userId) => {
    try {
        const { data: response } = await api.delete(`/users/${userId}`)
    
        return response;
    } catch (err) {
        throw new Error(err);
    }
};