import axios from 'axios';

export const login = async (email,password) => {
    var payload = {
        "email" : email,
        "password" : password
    }
    const response = await axios.post('http://localhost:8000/users/login', payload);
    console.log(response, 'in api');
    return response.data;
}