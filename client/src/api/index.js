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
      },
      data: {
        firstId,
        secondId
      }
    }
  try {
      const response = await axios.post(`${backendURL}/chats`, config)
      const chat = response.data
      return chat
  } catch (error) {
      console.log(error);
  }
}

export const postMessage2 = async ({chatId, senderId, content, token}) => {
  console.log(chatId, senderId, content, token)
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    data: {
      chatId,
      senderId,
      content
    }
  }
  try {
      const response = await axios.post(`http://localhost:3003/v1/api/messages`, config)
      console.log(response.data);
      return response.data.message;
      //socket
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message)
    } else {
      return rejectWithValue(error.message)
    }
  }
}


