import axios from "axios";

const backendURL = "http://localhost:3003/v1/api/users"

export const getUser = async ({id, token}) => {
    const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    try {
        const response = await axios.get(`${backendURL}/infor/${id}`, config)
        const user = response.data
        return user
    } catch (error) {
        console.log(error);
    }
}