import axios from "axios";

const backendURL = "http://localhost:3003/v1/api"

export const getUser = async ({id, token}) => {
    const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    try {
        const response = await axios.get(`${backendURL}/users/infor/${id}`, config)
        const user = response.data
        return user
    } catch (error) {
        console.log(error);
    }
}

export const getChat = async ({firstId, secondId, token}) => {
  const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  const data = {
    firstId,
    secondId
  }
  try {
      const response = await axios.post(`${backendURL}/chats`,data, config)
      const chat = response.data
      return chat
  } catch (error) {
      console.log(error);
  }
}

export const sendRequest = async ({senderId, recipientId, token}) => {
  const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }
  try {
      await axios.post(`${backendURL}/users/request`, {senderId, recipientId}, config)
  } catch (error) {
      console.log(error);
  }
}
export const acceptRequest = async ({senderId, accepterId, token}) => {
  const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }
  try {
      await axios.post(`${backendURL}/users/friend`, {senderId, accepterId}, config)
  } catch (error) {
      console.log(error);
  }
}

