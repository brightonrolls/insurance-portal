import axios from 'axios';

export const register = async (user) => {
    const response = await axios.post('http://localhost:8000/users/registration', user);
    return response.data;
}